using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QuotingDojoRedux.Factory;
using QuotingDojoRedux.Models;
using Microsoft.AspNetCore.Identity;

namespace QuotingDojoRedux.Controllers
{
    public class QuotingDojoReduxController : Controller
    {
        private readonly QuoteFactory quoteFactory;
        private readonly UserFactory userFactory;
		public QuotingDojoReduxController(QuoteFactory quote, UserFactory user)
		{
			quoteFactory = quote;
            userFactory = user;
		}
        private static List<string> errors = new List<string>(); //list to store errors
        private static string whichErr = null; //string to figure out which notification div to expose
        private static User currUser = null; //user object to store user information for the logged in user

        [HttpGetAttribute]
        [Route("")]
        public IActionResult Index()
        {
            ViewBag.showReg = false; //hide the registration notification box
            ViewBag.showLog = false; //hide the login notification box
            ViewBag.errors = errors; //set ViewBag.errors equal to the errors list
            if (whichErr == "log") //if log in errors were set...
            {
                ViewBag.showLog = true; //unhide the login notification box
            }
            else if (whichErr == "reg") //if registration errors were set...
            {
                ViewBag.showReg = true; //unhide the registration notification box
            }
            return View(); //render the index page
        }

        [HttpPostAttribute]
        [Route("register")]
        public IActionResult Register(User NewUser)
        {
            errors.Clear(); //clear out all errors to begin
            whichErr = null; //reset whichErr
            User checkUser = userFactory.FindByEmail(NewUser.email); //create a User object and attempt to retrieve user information based on the entered email address
            if (ModelState.IsValid) //if the data entered in the inputs meets the min requirements as set forth in the User class in models...
            {
                if (checkUser != null) //if a user is retrieved based on the entered email address..
                {
                    errors.Add("User already exists, please log in."); //add this error to the errors list
                    whichErr = "reg"; //set whichErr to a registration error
                }
                else //if a user is not retrieved...
                {
                    PasswordHasher<User> Hasher = new PasswordHasher<User>(); //create a new PasswordHasher object
                    NewUser.password = Hasher.HashPassword(NewUser, NewUser.password); //set the NewUser's password attribute to a hashed version of the entered password
                    userFactory.Add(NewUser); //send the NewUser object (with populated information) to the userFactory to add to the DB
                    currUser = NewUser; //set currUser to the NewUser object with the hashed password
                    return RedirectToAction("Success"); //return to the Success page
                }
            }
            else //if the data entered in the inputs does not meet the min requirements...
            {
                foreach (var error in ModelState.Values) //for every object in the list of ModelState.Values
                {
                    if(error.Errors.Count > 0) //assuming the Error count is greater than 0
                    {
                        string errorMess = (string)error.Errors[0].ErrorMessage; //create a string to store each error message
                        errors.Add(errorMess); //add that message to the errors list
                        whichErr = "reg"; //set whichErr to a registration error
                    }
                }
            }
            return RedirectToAction("Index"); //return the user to Index
        }

        [HttpPostAttribute]
        [Route("login")]
        public IActionResult Login(LogUser NewLogUser)
        {
            errors.Clear(); //clear out all errors to begin
            whichErr = null; //reset whichErr
            User checkUser = userFactory.FindByEmail(NewLogUser.email); //create a User object and attempt to retrieve user information based on the entered email address
            if (ModelState.IsValid) //if the data entered in the inputs meets the min requirements as set forth in models...
            {
                var Hasher = new PasswordHasher<User>(); //create a new object to check a hashed password against
                if (checkUser == null) //if a user is not retrieved based on the entered email address...
                {
                    errors.Add("Username or password incorrect."); //add this error to the error list
                    whichErr = "log"; //set whichErr to a login error
                }
                else if (Hasher.VerifyHashedPassword(checkUser, checkUser.password, NewLogUser.password) == 0) //if the password entered doesn't match the password in the DB...
                {
                    errors.Add("Username or password incorrect."); //add this error to the error list
                    whichErr = "log"; //set whichErr to a login error
                }
                else //if a user is retrieved and the password is correct...
                {
                    currUser = checkUser; //set currUser equal to the retrieved user
                    return RedirectToAction("Success"); //return to the Success page
                }
            }
            else //if the data entered in the inputs does not meet the min requirements...
            {
                foreach (var error in ModelState.Values) //for every object in the list of ModelState.Values
                {
                    if(error.Errors.Count > 0) //assuming the Error count is greater than 0
                    {
                        string errorMess = (string)error.Errors[0].ErrorMessage; //create a string to store each error message
                        errors.Add(errorMess); //add that message to the errors list
                        whichErr = "log"; //set whichErr to a login error
                    }
                }
            }
            return RedirectToAction("Index"); //return the user to Index
        }

        [HttpGetAttribute]
        [Route("success")]
        public IActionResult Success()
        {
            if (currUser == null) //if there is no user information stored in currUser...
            {
                return RedirectToAction("Index"); //return the user to Index
            }
            else //if there IS user information stored in currUser...
            {
                ViewBag.name = currUser.first_name; //set ViewBag.name equal to the first name of the user set in currUser
                return View("Success"); //render the Success page
            }
        }

        [HttpGetAttribute]
        [Route("logout")]
        public IActionResult Logout()
        {
            currUser = null; //reset currUser
            return RedirectToAction("Index"); //return the user to Index
        }

        /************************quoting Dojo stuff******************************/
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

        /************************quoting Dojo stuff******************************/
    }
}
