using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace RandoWordGen.Controllers
{
    public class HomeController : Controller
    {
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            if (HttpContext.Session.GetInt32("Count") == null) //if the Count variable is yet to be created...
            {
                HttpContext.Session.SetInt32("Count", 1); //create it and set it equal to 1!
            }
            else { //otherwise...
                HttpContext.Session.SetInt32("Count", ((int)HttpContext.Session.GetInt32("Count") + 1)); //increment count by 1
            }
            ViewBag.Count = (int)HttpContext.Session.GetInt32("Count"); //set ViewBag.Count to the session count variable
            ViewBag.Rando = Generate.MakeStr(); //generate a random string and set it equal to ViewBag.Rando
            return View();
        }
    }
    public class Generate
    {
        public static Random rnd = new Random();
        public static string MakeStr() //creates the random string
        {
            string Str = ""; //empty string variable
            int makeChar; //empty integer variable
            while (Str.Length < 14) //continue until Str is 14 characters in length
            {
                int num = rnd.Next(1, 3); //create a random int of either 1 or 2
                if (num == 1) //if num is 1...
                {
                    makeChar = rnd.Next(48, 58); //create a random number between 48 and 57(inclusive) to choose from 0-9 in ASCII char code
                }
                else //if num is 2...
                {
                    makeChar = rnd.Next(65, 91); //create a random number between 65 and 90(inclusive) to choose from A-Z in ASCII char code
                }
                char letter = (char)makeChar; //create a char variable using the ASCII character code generated
                Str += letter.ToString(); //convert the char to a string letter and concatenate it onto Str
            }
            return Str;
        }
    }
}
