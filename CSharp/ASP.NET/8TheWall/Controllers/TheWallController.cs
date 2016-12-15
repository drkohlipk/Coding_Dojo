using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TheWall.Factory;

namespace TheWall.Controllers
{
    public class TheWallController : Controller
    {
        private readonly UserFactory userFactory;
        private readonly MessageFactory messageFactory;
        private readonly CommentFactory commentFactory;
		public TheWallController(UserFactory user, MessageFactory message, CommentFactory comment)
		{
			userFactory = user;
            messageFactory = message;
            commentFactory = comment;
		}

        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
