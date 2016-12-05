using Microsoft.Extensions.DependencyInjection;

namespace ASPtest
{
	public class Startup
	{
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddMvc();
		}
	}
}