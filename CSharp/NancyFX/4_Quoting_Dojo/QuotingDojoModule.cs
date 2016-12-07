//Need to create this module (for Nancy Routing), name it corresponding to namespace and add your routing info below

using Nancy;
/********************Add applicable libraries*******************/
using System;
using System.Collections.Generic;
using DbConnection;
/********************Add applicable libraries*******************/

namespace QuotingDojo
{
	public class QuotingDojoModule : NancyModule
	{
		public QuotingDojoModule()
		{
			List<string> errors = new List<string>(); //create a list to store errors
			Get("/", args => 
			{
				if (Session["errors"] != null) //if there are errors in session...
				{
					foreach (string error in (List<string>)Session["errors"]) //put each error in the errors list
					{
						errors.Add($"<p>{error}</p>");
					}
					ViewBag.showErrors = true; //show the error box
				}
				else //if there are no errors in session...
				{
					errors.Clear(); //clear the errors list
					ViewBag.showErrors = false; //do not show the error box
				}
				return View["QuotingDojo", errors]; //load the html page with the error list bound
			});

			Post("/quotes", args => //if the user attempts to add a new quote...
			{
				List<string> errorsList = new List<string>(); //create the errorsList list to store errors for validation purposes
				if (Request.Form["name"] == "") //if the name input field is left blank...
				{
					errorsList.Add("Please enter a name."); //add this error to the errorsList
				}
				if (Request.Form["quote"] == "") //if the quote textarea is left blank...
				{
					errorsList.Add("Please enter a quote."); //add this error to the errorsList
				}
				if (errorsList.Count != 0) //if errorsList is not empty...
				{
					Session["errors"] = errorsList; //store the errorsList in session
					return Response.AsRedirect("/"); //return the user to the addquote page
				}
				string name = (string)Request.Form["name"]; //store form name as a string variable
				string quote = (string)Request.Form["quote"]; //store form quote as a string variable
				string Query = $"INSERT INTO quotes (name, quote, likes, created_at, updated_at) VALUES ('{name}', '{quote}', 0, NOW(), NOW())"; //if there are no errors, make a query to insert name and quote into database with 0 likes
				DbConnector.ExecuteQuery(Query); //submit query
				Session["errors"] = null; //set session errors to null
				return Response.AsRedirect("/quotes"); //send user to the quotes page
			});

			Get("/quotes", args =>
			{
				string Query = "SELECT id, name, quote, likes, DATE_FORMAT(created_at, '%l:%i%p %M %e %Y') AS created_at FROM quotes ORDER BY likes DESC"; //create a query to pull all information from the database, format the date, and sort by likes descending
				List<Dictionary<string, object>> retrieve = DbConnector.ExecuteQuery(Query); //store the results of the query in a list called retrieve
				if (retrieve.Count == 0) //if there is nothing in the database...
				{
					ViewBag.header = "Currently there are no quotes...:-("; //show this at the top of the quotes page
					ViewBag.show = false; //hide the quote container
				}
				else //if there IS something in the database...
				{
					ViewBag.header = "Here are the awesome quotes!"; //show this at the top of the quotes page
					ViewBag.show = true; //show the quote container
				}
				List<string> quotes = new List<string>(); //create a list to store quote divs as strings
				foreach (Dictionary<string,object> quote in retrieve) //for every quote in the database...
				{
					quotes.Add($"<div class='seventy center quote'><p><em>&quot;{(string)quote["quote"]}&quot;</em></p><p>&#45;{(string)quote["name"]} at {(string)quote["created_at"]}</p><p>{(int)quote["likes"]} likes &nbsp;&nbsp;&nbsp;<a href='/like/{(int)quote["id"]}'>Like this!</a></p></div>"); //create this quote div based on retrieved information
				}
				return View["quotes", quotes]; //return the user to the quotes page with the quotes list
			});
			Get("/like/{id}", args => //if a user likes a quote...
			{
				string Query = $"UPDATE quotes SET likes=likes+1 WHERE id = {args.id}"; //create a query to update the like count of the quote
				DbConnector.ExecuteQuery(Query); //submit the query
				return Response.AsRedirect("/quotes"); //return the user to the quotes page.
			});
		}
	}
}