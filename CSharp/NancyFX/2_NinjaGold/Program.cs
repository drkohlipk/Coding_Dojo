using System;
using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace NinjaGold
{
    public class Program
    {
        public static Dictionary<string,object> Process(string place) 
        { //method to process gold
            Random rnd = new Random(); //create a new random object 
            Dictionary<string,int> places = new Dictionary<string,int>() //create a dictionary to hold all of the places with their respective random amounts
            {
                {"farm", rnd.Next(10,21)},
                {"cave", rnd.Next(5,11)},
                {"house", rnd.Next(2,6)},
                {"casino", rnd.Next(-50,50)}
            };
            int gold = places[place]; //set the gold to the amount of random gold generated
            string time = DateTime.Now.ToString(); //create a string to hold the current time
            Dictionary<string,object> result = new Dictionary<string,object>() //create a dictionary for the result and populate it with the correct information
            {
                {"gold", gold},
                {"activity", (gold >=0) ? $"<p class='green'>Earned {gold} golds from the {place}!  ({time})</p>" : $"<p class='red'>Entered a casino and lost {gold} golds... Ouch...  ({time})</p>"} //ternary for whether the gold is positive or negative
            };
            return result;
        }
        public static void Main(string[] args)
        {
            IWebHost host = new WebHostBuilder()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseKestrel()
                .UseStartup<Startup>()
                .Build();
            host.Run();
        }
    }
}
