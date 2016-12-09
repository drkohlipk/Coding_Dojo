using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using QuotingDojo.Models;
using QuotingDojo.Factory;

namespace QuotingDojo.Controllers
{
    public class QuotingDojoController : Controller
    {
        private readonly QuoteFactory quoteFactory; //creates immutable private QuoteFactory object
        public static List<string> errors = new List<string>(); //created a list to store all generated errors
        public QuotingDojoController()
        {
            quoteFactory = new QuoteFactory();
        }

        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            if (errors.Count > 0) //if there are errors in the errors list...
            {
                ViewBag.Errors = errors; //send those errors to the index page
            }
            return View();
        }

        [HttpGet]
        [Route("Quotes")]
        public IActionResult Quotes()
        {
            errors.Clear(); //start off by clearing the errors list
            List<Quote> allQuotes = (List<Quote>)quoteFactory.FindAll(); //generate a list of Quote objects and store all quotes in the DB in it
            if (allQuotes.Count > 0) //if there are quotes in the DB...
            {
                ViewBag.quoteShow = true; //allow the quoteContainer to be viewed and change h1
                ViewBag.quotes = allQuotes; //send the quotes to the Quotes page in ViewBag
            }
            else //if there aren't any quotes in the DB yet...
            {
                ViewBag.quoteShow = false; //don't allow the quoteContainer to be viewed and set default h1
            }
            return View("Quotes");
        }
        
        [HttpPost]
        [Route("addQuote")]
        public IActionResult addQuote(Quote NewQuote) //receives a NewQuote object as an argument AS LONG AS ALL NAMES OF INPUTS AND MODEL KEYS MATCH!!
        {
            errors.Clear(); //clear out all errors to begin
            if (ModelState.IsValid) //if the data entered in the inputs meets the min requirements as set forth in models...
            {
                quoteFactory.Add(NewQuote); //send the NewQuote object (with populated information) to the quoteFactory to add to the DB
                return RedirectToAction("Quotes"); //return to the Quote page
            }
            else //if the data entered does NOT meet the min reqs in models...
            {
                foreach (var error in ModelState.Values) //for every object in the list of ModelState.Values
                {
                    if(error.Errors.Count > 0) //assuming the Error count is greater than 0
                    {
                        string errorMess = (string)error.Errors[0].ErrorMessage; //create a string to store each error message
                        errors.Add(errorMess); //add that message to the errors list
                    }
                }
                return RedirectToAction("Index"); //return the user to Index
            }
        }

        [HttpGet]
        [RouteAttribute("like/{id}")]
        public IActionResult like(int id)
        {
            quoteFactory.LikeByID(id); //send the id of the quote to like to the quoteFactory to update the DB
            return RedirectToAction("Quotes"); //return the user to Quotes
        }

        [HttpGet]
        [RouteAttribute("update/{id}")]
        public IActionResult update(int id)
        {
            if (errors.Count > 0) //if there are errors in the error list...
            {
                ViewBag.Errors = errors; //send those errors to the Update page
            }
            Quote upQuote = (Quote)quoteFactory.FindByID(id); //create a new Quote object to store the retrieved quote in (based on id) IMPORTANT: make sure the columns in your DB table match the object keys you defined in your Quote class!!
            ViewBag.name = upQuote.Name; //send the quote name to Update in ViewBag
            ViewBag.quote = upQuote.QuoteText; //send the quote text to Update in ViewBag
            ViewBag.id = upQuote.Id; //send the quote id to Update in ViewBag
            return View("Update");
        }

        [HttpPost]
        [Route("updateQuote")]
        public IActionResult updateQuote(Quote NewQuote) //receive a Quote object as a parameter based on the information in the input fields
        {
            errors.Clear(); //start by clearing the errors list
            if (ModelState.IsValid) //if the information entered matches the min reqs in your models...
            {
                quoteFactory.Update(NewQuote); //update the quote based on the information entered using quoteFactory
                return RedirectToAction("Quotes"); //return the user to the Quotes page
            }
            else //if the information entered does not match the min reqs in models...
            {
                foreach (var error in ModelState.Values) //for every object in the list of ModelState.Values
                {
                    if(error.Errors.Count > 0) //assuming the Error count is greater than 0
                    {
                        string errorMess = (string)error.Errors[0].ErrorMessage; //create a string to store each error message
                        errors.Add(errorMess); //add that message to the errors list
                    }
                }
                return RedirectToAction("Update", new {id = NewQuote.Id}); //return the user to the Update page with the arg of the quote id
            }
        }

        [HttpGet]
        [RouteAttribute("delete/{id}")]
        public IActionResult delete(int id)
        {
            quoteFactory.DeleteByID(id); //delete the quote from the DB based on the id
            return RedirectToAction("Quotes"); //return the user to the Quotes page
        }
    }
}
