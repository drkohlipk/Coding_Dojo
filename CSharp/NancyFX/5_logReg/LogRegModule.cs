//Need to create this module (for Nancy Routing), name it corresponding to namespace and add your routing info below

using Nancy;
/********************Add applicable libraries*******************/
using System;
using System.Collections.Generic;
using DbConnection;
using CryptoHelper;
using System.Text.RegularExpressions;
/********************Add applicable libraries*******************/

namespace LogReg
{
	public class LogRegModule : NancyModule
	{
		protected string EMAIL_REGEX = @"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+.[a-zA-Z]+$";
		protected string NAME_REGEX = @"^[a-zA-Z&#45;&#39;]{2,}$";
		protected string PWORD_REGEX = @"(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;&#39;?/&gt;.&lt;,])(?!.*\s).*$";
		public LogRegModule()
		{
			Regex e = new Regex(EMAIL_REGEX, RegexOptions.IgnoreCase);
			Regex n = new Regex(NAME_REGEX, RegexOptions.IgnoreCase);
			Regex p = new Regex(PWORD_REGEX, RegexOptions.IgnoreCase);
			Get("/", args => 
			{
				List<string> errors = new List<string>();
				ViewBag.ShowReg = false;
				ViewBag.ShowLog = false;
				if (Session["regErrors"] != null)
				{
					errors = (List<string>)Session["regErrors"];
					ViewBag.ShowReg = true;
				}
				if (Session["logErrors"] != null)
				{
					errors = (List<string>)Session["logErrors"];
					ViewBag.ShowLog = true;
				}
				return View["index", errors]; //load the html page
			});
			Post("/register", args =>
			{
				Session["logErrors"] = null;
				Session["regErrors"] = null;
				string Query = $"SELECT * FROM users WHERE email = '{(string)Request.Form["email"]}';";
				Console.WriteLine(Query);
				List<Dictionary<string, object>> validUser = DbConnector.ExecuteQuery(Query);
				List<string> regErrors = new List<string>();
				Match email = e.Match((string)Request.Form["email"]);
				Match first = n.Match((string)Request.Form["firstName"]);
				Match last = n.Match((string)Request.Form["lastName"]);
				Match pword = p.Match((string)Request.Form["password"]);
				if (validUser.Count != 0)
				{
					regErrors.Add("<li>This email has already been registered.</li>");
				}
				if (Request.Form["firstName"] == "" || Request.Form["lastName"] == "" || Request.Form["email"] == "" || Request.Form["password"] == "" || Request.Form["confirm"] == "")
				{
					regErrors.Add("<li>Please fill out all fields.</li>");
				}
				if (!first.Success || !last.Success)
				{
					regErrors.Add("<li>Please enter a valid name.</li>");
				}
				if (!email.Success)
				{
					regErrors.Add("<li>Please enter a valid email.</li>");
				}
				if (!pword.Success)
				{
					regErrors.Add("<li>Please enter a valid password format (Must be at least 8 characters in length and include one capital letter, one lowercase letter, and one special character).</li>");
				}
				if ((string)Request.Form["password"] != (string)Request.Form["confirm"])
				{
					regErrors.Add("<li>Password and confirmation do not match.</li>");
				}
				if (regErrors.Count != 0)
				{
					Session["regErrors"] = regErrors;
					return Response.AsRedirect("/");
				}
				else 
				{
					string EncryptedPword = Crypto.HashPassword((string)Request.Form["password"]);
					string first_name = (string)Request.Form["firstName"];
					string last_name = (string)Request.Form["lastName"];
					string e_mail = (string)Request.Form["email"];
					Console.WriteLine($"{first_name}, {last_name}, {e_mail}");
					Query = $"INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES ('{first_name}', '{last_name}', '{e_mail}', '{EncryptedPword}', NOW(), NOW());";
					DbConnector.ExecuteQuery(Query);
					Query = $"SELECT * FROM users WHERE email = '{e_mail}';";
					List<Dictionary<string, object>> regUser = DbConnector.ExecuteQuery(Query); 
					Console.WriteLine(regUser.ToString());
					Session["firstName"] = (string)(regUser[0]["first_name"]);
					return Response.AsRedirect("/success");
				}
			});
			Post("/login", args =>
			{
				Session["logErrors"] = null;
				Session["regErrors"] = null;
				string Query = $"SELECT * FROM users WHERE email = '{(string)Request.Form["email"]}';";
				List<Dictionary<string, object>> validUser = DbConnector.ExecuteQuery(Query);
				List<string> logErrors = new List<string>();
				bool IsCorrectPword;
				if (validUser.Count == 0)
				{
					logErrors.Add("<li>Username or email incorrect.</li>");
				}
				else
				{
					IsCorrectPword = Crypto.VerifyHashedPassword((string)(validUser[0]["password"]), (string)Request.Form["password"]);
					if (!IsCorrectPword)
					{
						logErrors.Add("<li>Username or email incorrect.</li>");
					}
				}
				if (logErrors.Count != 0)
				{
					Session["logErrors"] = logErrors;
					return Response.AsRedirect("/");
				}
				else
				{
					Session["firstName"] = (string)(validUser[0]["first_name"]);
					return Response.AsRedirect("/success");
				}
			});
			Get("/success", args =>
			{
				if (Session["firstName"] == null)
				{
					return Response.AsRedirect("/");
				}
				else
				{
					ViewBag.name = (string)Session["firstName"];
					return View["success"];
				}
			});
			Get("/logout", args =>
			{
				Session["firstName"] = null;
				return Response.AsRedirect("/");
			});
		}
	}
}