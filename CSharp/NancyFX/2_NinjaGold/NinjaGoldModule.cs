using Nancy;
using System;
using System.Collections.Generic;

namespace NinjaGold
{
	public class NinjaGoldModule : NancyModule
	{
		public static List<string> Activities;
		public NinjaGoldModule()
		{
			Get("/", args =>
			{
				if (Activities == null) //if this is the first time the program is being run and activity has yet to be set up...
				{
					Activities = new List<string>(); //create the activities list
					Activities.Add("<p>You currently have no activities...</p>"); //add this text to be displayed
					Session["gold"] = 0; //initialize gold and set it equal to 0
					Session["goldColor"] = ""; //make the gold color black
				}
				else if ((int)Session["gold"] < 0) //if gold is set up and it's negative...
				{
					Session["goldColor"] = "red"; //set the color of the gold to red
				}
				else if ((int)Session["gold"] >= 0) //if the gold is set up and it's positive...
				{
					Session["goldColor"] = ""; //set the color of the gold to black
				}
				ViewBag.GoldColor = Session["goldColor"]; //send the gold color to ViewBag
				ViewBag.Gold = Session["gold"]; //Send the gold to ViewBag
				return View["NinjaGold", Activities]; //render the html page and send activities with it
			});
			Post("/process_money", args => //if any of the find gold buttons are pressed...
			{
				Dictionary<string,object> result = new Dictionary<string,object>(); //create a dictionary named result
				string place = Request.Form.place; //create a string to store the place where the button was clicked
				result = Program.Process(place); //set result to the dictionary retrieved when process is run on the specific place
				int gold = (int)Session["gold"]; //create an int variable to store the current session gold
				gold += (int)result["gold"]; //add the current gold to the amount received during processing
				Session["gold"] = gold; //update the gold in session
				if (Activities[0] == "<p>You currently have no activities...</p>") //if activities still contains the initial string...
				{
					Activities.RemoveAt(0); //get rid of it!
				}
				Activities.Insert(0, (string)result["activity"]); //insert the new activity into the activities list at position 0
				return Response.AsRedirect("/"); //redirect to root
			});
		}
	}
}