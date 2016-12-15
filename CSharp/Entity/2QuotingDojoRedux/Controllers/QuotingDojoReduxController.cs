using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using QuotingDojoRedux.Models;
using Microsoft.EntityFrameworkCore;

namespace QuotingDojoRedux.Controllers
{
    public class QuotingDojoReduxController : Controller
    {
        private QuotingDojoContext _context;
        public QuotingDojoReduxController(QuotingDojoContext context)
        {
            _context = context;
        }
        private static User currUser = null; //user object to store user information for the logged in user

        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            ViewBag.LogView = new LogViewModel();
            ViewBag.RegView = new RegViewModel();
            return View(); //render the index page
        }

        [HttpPost]
        [Route("register")]
        public IActionResult Register(RegViewModel model)
        {
            if (ModelState.IsValid) //if the data entered in the inputs meets the min requirements as set forth in the User class in models...
            {
                User checkUser = _context.Users.SingleOrDefault(user => user.email == model.email);
                if (checkUser != null) //if a user is retrieved based on the entered email address..
                {
                    ViewBag.DupeReg = "User already exists, please log in."; //add this error to the errors list
                    return View("Index");
                }
                else //if a user is not retrieved...
                {
                    PasswordHasher<User> Hasher = new PasswordHasher<User>(); //create a new PasswordHasher object
                    User NewUser = new User
                    {
                        first_name = model.first_name,
                        last_name = model.last_name,
                        email = model.email,
                        password = model.password,
                        created_at = DateTime.Now,
                        updated_at = DateTime.Now
                    };
                    NewUser.password = Hasher.HashPassword(NewUser, NewUser.password);
                    _context.Users.Add(NewUser);
                    _context.SaveChanges();
                    currUser = _context.Users.SingleOrDefault(user => user.email == model.email);
                    return RedirectToAction("Success"); //return to the Success page
                }
            }
            ViewBag.RegErrors = true;
            return View("Index", model); //return the user to Index
        }

        [HttpPost]
        [Route("login")]
        public IActionResult Login(LogViewModel model)
        {
            User checkUser = _context.Users.SingleOrDefault(user => user.email == model.logemail); //create a User object and attempt to retrieve user information based on the entered email address
            if (ModelState.IsValid) //if the data entered in the inputs meets the min requirements as set forth in models...
            {
                var Hasher = new PasswordHasher<User>(); //create a new object to check a hashed password against
                if (checkUser == null) //if a user is not retrieved based on the entered email address...
                {
                    ViewBag.DupeLog = "Username or password incorrect."; //add this error to the errors list
                    return View("Index");
                }
                else if (Hasher.VerifyHashedPassword(checkUser, checkUser.password, model.logpassword) == 0) //if the password entered doesn't match the password in the DB...
                {
                    ViewBag.DupeLog = "Username or password incorrect."; //add this error to the errors list
                    return View("Index");
                }
                else //if a user is retrieved and the password is correct...
                {
                    currUser = checkUser; //set currUser equal to the retrieved user
                    return RedirectToAction("Success"); //return to the Success page
                }
            }
            ViewBag.LogErrors = true;
            return View("Index",model); //return the user to Index
        }
        
        [HttpGet]
        [Route("success")]
        public IActionResult Success()
        {
            if (currUser == null) //if there is no user information stored in currUser...
            {
                return RedirectToAction("Index"); //return the user to Index
            }
            ViewBag.name = currUser.first_name; //set ViewBag.name equal to the first name of the user set in currUser
            ViewBag.userID = currUser.userid;
            return View("AddQuote",new QuoteViewModel());
        }

        [HttpGet]
        [Route("quotes")]
        public IActionResult Quotes()
        {
            if (currUser == null) //if there is no user information stored in currUser...
            {
                return RedirectToAction("Index"); //return the user to Index
            }
            List<Quote> allQuotes = _context.Quotes.Include(quote => quote.user).ToList(); //generate a list of Quote objects and store all quotes in the DB in it
            if (allQuotes.Count > 0) //if there are quotes in the DB...
            {
                ViewBag.quoteShow = true; //allow the quoteContainer to be viewed and change h1
                ViewBag.quotes = allQuotes; //send the quotes to the Quotes page in ViewBag
            }
            else //if there aren't any quotes in the DB yet...
            {
                ViewBag.quoteShow = false; //don't allow the quoteContainer to be viewed and set default h1
            }
            ViewBag.UserId = currUser.userid; //send the user id to the front end
            return View("Quotes");
        }
        
        [HttpPost]
        [Route("addQuote")]
        public IActionResult addQuote(QuoteViewModel model) //receives a NewQuote object as an argument AS LONG AS ALL NAMES OF INPUTS AND MODEL KEYS MATCH!!
        {
            if (currUser == null) //if there is no user information stored in currUser...
            {
                return RedirectToAction("Success"); //return the user to Success
            }
            if (ModelState.IsValid) //if the data entered in the inputs meets the min requirements as set forth in models...
            {
                Quote NewQuote = new Quote
                {
                    quotetext = model.quotetext,
                    userid = currUser.userid,
                    created_at = DateTime.Now,
                    updated_at = DateTime.Now
                };
                _context.Add(NewQuote); //send the NewQuote object (with populated information) to the quoteFactory to add to the DB
                _context.SaveChanges();
                return RedirectToAction("Quotes"); //return to the Quote page
            }
            ViewBag.QuoteErrors = true;
            ViewBag.name = currUser.first_name; //set ViewBag.name equal to the first name of the user set in currUser
            ViewBag.userID = currUser.userid;
            return View("AddQuote", model); //return the user to Success
        }

        [HttpGet]
        [Route("update/{id}")]
        public IActionResult update(int id)
        {
            if (currUser == null) //if there is no user information stored in currUser...
            {
                return RedirectToAction("Index"); //return the user to Index
            }
            Quote upQuote = _context.Quotes.Include(quote => quote.user).SingleOrDefault(quote => quote.quoteid == id);
            if (currUser.userid != upQuote.userid) { //if the user isn't the original creator of the quote...
                return RedirectToAction("Quotes"); //return the user to the quotes page
            }
            UpquoteViewModel upquote = new UpquoteViewModel
            {
                quotetext = upQuote.quotetext,
                userid = currUser.userid,
                quoteid = id
            };
            return View("Update", upquote);
        }

        [HttpPost]
        [Route("updateQuote")]
        public IActionResult updateQuote(UpquoteViewModel model) //receive a Quote object as a parameter based on the information in the input fields
        {
            if (currUser == null) //if there is no user information stored in currUser...
            {
                return RedirectToAction("Index"); //return the user to Index
            }
            if (currUser.userid != model.userid) { //if the user isn't the one who created the quote to update...
                return RedirectToAction("Quotes"); //return the user to the Quotes page
            }
            if (ModelState.IsValid) //if the information entered matches the min reqs in your models...
            {
                Quote upQuote =  _context.Quotes.SingleOrDefault(quote => quote.quoteid == model.quoteid);
                upQuote.quotetext = model.quotetext;
                upQuote.updated_at = DateTime.Now;
                _context.SaveChanges(); //update the quote based on the information entered using quoteFactory
                return RedirectToAction("Quotes"); //return the user to the Quotes page
            }
            ViewBag.QuoteErrors = true;
            return View("Update", model); //return the user to the Update page with the arg of the quote id
        }

        [HttpGet]
        [Route("delete/{id}")]
        public IActionResult delete(int id)
        {
            if (currUser == null) //if there is no user information stored in currUser...
            {
                return RedirectToAction("Index"); //return the user to Index
            }
            Quote delQuote = _context.Quotes.SingleOrDefault(quote => quote.quoteid == id);
            if (currUser.userid != delQuote.userid) { //if the logged in user isn't the one that created this quote...
                return RedirectToAction("Quotes"); //return the user to the Quotes page
            }
            _context.Quotes.Remove(delQuote);
            _context.SaveChanges(); //delete the quote from the DB based on the id
            return RedirectToAction("Quotes"); //return the user to the Quotes page
        }

        [HttpGet]
        [Route("logout")]
        public IActionResult Logout()
        {
            currUser = null; //reset currUser
            return RedirectToAction("Index"); //return the user to Index
        }
    }
}
