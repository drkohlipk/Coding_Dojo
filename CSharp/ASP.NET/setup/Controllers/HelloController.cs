using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace YourNamespace.Controllers
{
	public class HelloController : Controller
	{
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
	}
}