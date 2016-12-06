//Need to create this module (for Nancy Routing), name it corresponding to namespace and add your routing info below

using Nancy;
/********************Add applicable libraries*******************/
using System;
using System.Collections.Generic;
using ApiCaller;
using Newtonsoft.Json.Linq;
using DbConnection;
/********************Add applicable libraries*******************/

namespace ChangeMe //Change this to something useful!
{
	public class ChangeMeModule : NancyModule
	{
		public void ChangeMeModule()
		{
			Get("/", args => 
			{
				//Can add lambda function here
				//Can also use arguments passed through URL with "/{name}", args => $"Hello {args.name}!"
				//Can bind iterable as well with List<string> listOfStuffToDisplay = new List<string>(); and add listOfStuffToDisplay inside of View (as shown).  To add another iterable, need to make a wrapper class and send it via ViewBag
				return View["<name of html file without the .html", listOfStuffToDisplay]; //load the html page
			}); //Can do Get or Post
		}
	}
}