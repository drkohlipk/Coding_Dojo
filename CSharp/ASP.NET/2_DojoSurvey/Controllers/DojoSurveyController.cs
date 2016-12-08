using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DojoSurvey.Controllers
{
	public class DojoSurveyController : Controller
	{
		[HttpGet]
		[Route("")]
		public IActionResult Index()
		{
			return View("Index");
		}
		[HttpPost]
		[Route("result")]
		public IActionResult Submit(string name, string location, string language, string comment)
		{
			ViewBag.Name = name;
			ViewBag.Location = location;
			ViewBag.Language = language;
			ViewBag.Comment = comment;
			return View("Result");
		}
	}
}