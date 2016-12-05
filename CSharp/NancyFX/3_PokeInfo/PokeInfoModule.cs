using Nancy;

namespace PokeInfo
{
	public class PokeInfoModule : NancyModule
	{
		public PokeInfoModule()
		{
			Get("/", args => {
				return View["PokeInfo"];
			});
		}
	}
}