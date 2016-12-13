using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using LogReg.Factory;
using LogReg.Models;

namespace LogReg.Controllers
{
    public class LogRegController : Controller
    {
        private readonly UserFactory userFactory; //immutable UserFactory object for sending queries
        private static List<string> errors = new List<string>(); //list to store errors
        private static string whichErr = null; //string to figure out which notification div to expose
        private static User currUser = null; //user object to store user information for the logged in user
		public LogRegController(UserFactory user)
		{
			userFactory = user; //populates userFactory upon instantiation of the LogRegController class
		}

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
    }
}
