using Nancy;
using System;
using System.Collections.Generic;
using ApiCaller;
using Newtonsoft.Json.Linq;

namespace PokeInfo
{
	public class PokeInfoModule : NancyModule
	{
		public static Dictionary<string, object> result = new Dictionary<string, object>();
		public static List<Dictionary<string, object>> result2 = new List<Dictionary<string, object>>();
		public static List<string> populate = new List<string>();
		public PokeInfoModule()
		{
			Get("/", async args => 
			{
				if (populate.Count == 0) //if populate has not been created yet (page load)
				{
					ViewBag.show = false; //don't show the supplemental info
					await WebRequest.SendRequest("http://pokeapi.co/api/v2/pokemon", new Action<Dictionary<string, object>>( JsonResponse =>
						{
							result = JsonResponse; //pull all of the pokemon info and store it in result (doing this for length...)
						}
					));
					for (int i = 1; i < ((JArray)result["results"]).Count; i++) //iterate through each pokemon...
					{
						await WebRequest.SendRequest($"http://pokeapi.co/api/v2/pokemon/{i}", new Action<Dictionary<string, object>>( JsonResponse2 =>
							{
								result2.Add(JsonResponse2); //store each pokemon info in result2
								populate.Add($"<a href='/display/{i}'><div class='ten poke'><img src='{(string)(((JObject)(JsonResponse2["sprites"]))["front_default"])}' alt={(string)JsonResponse2["name"]}><p>{(string)JsonResponse2["name"]}</p></div></a>"); //create dynamic pokemon content
							}
						));
					}
				}
				if (Session["poke"] != null) //if a pokemon has yet to be clicked upon...
				{
					int number = (int)Session["poke"] - 1; //set number to one less than the number of the pokemon (result2 is an array, need index!)
					ViewBag.show = true; //show the supplemental info
					string str = "<span><b>Types: </b></span>"; //create str variable for types
					foreach (JObject type in (JArray)result2[number]["types"])
					{
						str += $"<p>{(string)((type["type"])["name"])}</p>"; //for each type...concatenate onto str
					}
					ViewBag.poke = $"<img src='{((JObject)(result2[number]["sprites"]))["front_default"]}' alt={result2[number]["name"]}><h2>{result2[number]["name"]}</h2><p><b>Height: </b>{result2[number]["height"]}</p><p><b>Weight: </b>{result2[number]["weight"]}</p>" + str; //create supplemental info!
				}
				return View["PokeInfo", populate]; //load the html page
			});

			Get("/display/{num}", args => //if a pokemon is clicked on...
			{	
				Session["poke"] = (int)args.num; //set it's number to Session["poke"] to retrieve it's info for supplemental info
				return Response.AsRedirect("/"); //redirect back to index
			});
		}
	}
}