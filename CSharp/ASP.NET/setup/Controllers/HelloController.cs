using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
/**********************Enables Session********************/
using Microsoft.AspNetCore.Http;
/**********************Enables Session********************/

namespace YourNamespace.Controllers
{
	public class HelloController : Controller
	{
		/*****************Added as part of DB Config********************/
		private readonly QuoteFactory quoteFactory;
		public HelloController(QuoteFactory quote)
		{
			quoteFactory = quote;
		}
		/*****************Added as part of DB Config********************/
		
		[HttpGet]
		[Route("RouteName")]
		public IActionResult Index()
		{
			return View("Index");
		}
		// ...
		// // A GET method
		// [HttpGet]
		// [Route("template/{Name}")]
		// public IActionResult Method(string Name)
		// {
		// ...
		// }
		// // A POST method
		// [HttpPost]
		// [Route("")]
		// public IActionResult Other()
		// {
		// ...
		// }
		// ...
		// HttpContext.Session.SetString("Key", "Value");
		// ...
		// HttpContext.Session.GetString("Key");
		// ...
		// HttpContext.Session.SetInt32("OtherKey", 123);
		// ...
		// HttpContext.Session.GetInt32("OtherKey");
	}
}