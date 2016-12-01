using Nancy;

namespace GreatNumberGame
{
	public class GreatNumberGameModule : NancyModule{
		public GreatNumberGameModule()
		{
			Get("/", args => 
			{
				if (Session["rando"] == null)
				{
					Session["ShowText"] = false;
					Session["ShowInput"] = true;
					Session["ShowNew"] = false;
					return Response.AsRedirect("/rando");
				}
				else {
					ViewBag.ShowText = Session["ShowText"];
					ViewBag.ShowInput = Session["ShowInput"];
					ViewBag.ShowNew = Session["ShowNew"];
					ViewBag.hClass = Session["hClass"];
					ViewBag.hText = Session["hText"];
					return View["GreatNumberGame"];
				}
			});

			Get("/rando", args =>
			{
				Session["rando"] = Program.MakeRando();
				return Response.AsRedirect("/");
			});

			Post("/guess", args =>
			{
				string guesstr = Request.Form.guess;
				int guess = int.Parse(guesstr);
				int num = (int)Session["rando"];
				if (guess > num)
				{
					Session["ShowText"] = true;
					Session["hClass"] = "red";
					Session["hText"] = "Too high!";
				}
				else if (guess < num)
				{
					Session["ShowText"] = true;
					Session["hClass"] = "red";
					Session["hText"] = "Too low!";
				}
				else
				{
					Session["ShowText"] = true;
					Session["ShowInput"] = false;
					Session["ShowNew"] = true;
					Session["hClass"] = "green";
					Session["hText"] = $"{num} was the number!";
				}
				return Response.AsRedirect("/");
			});

			Get("/new", args =>
			{
				Session["ShowText"] = false;
				Session["ShowInput"] = true;
				Session["ShowNew"] = false;
				Session["hClass"] = "";
				return Response.AsRedirect("/rando");
			});
		}
	}
}