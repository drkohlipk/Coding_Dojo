//Need to create this to tell app to use ASP.NET Core MVC

using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;

namespace YourNamespace //Change this to match the app namespace!
{
	public class Startup
	{
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddMvc();
			services.AddSession();
		}

		public void Configure(IApplicationBuilder App)
		{
			App.UseStaticFiles();
			App.UseMvc();
			App.UseSession();
		}
	}
}