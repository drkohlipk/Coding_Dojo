//Need to create this file to display errors with Nancy

/*************Need these for standard errors with Nancy***************/
using Nancy;
using Nancy.Configuration;
/*************Need these for standard errors with Nancy***************/

/***************Need these session variable with Nancy****************/
using Nancy.Session.Persistable;
using Nancy.Bootstrapper;
using Nancy.TinyIoc;
using Nancy.Session.InMemory;
/***************Need these session variable with Nancy****************/

namespace LogReg
{
	public class Bootstrapper : DefaultNancyBootstrapper
	{
		/***************Need these session variable with Nancy****************/
		protected override void ApplicationStartup(TinyIoCContainer container, IPipelines pipelines)
		{
			PersistableSessions.Enable(pipelines, new InMemorySessionConfiguration());
		}
		/***************Need these session variable with Nancy****************/

		/*************Need these for standard errors with Nancy***************/
		public override void Configure(INancyEnvironment env)
		{
			env.Tracing(enabled: false, displayErrorTraces: true);
		}
		/*************Need these for standard errors with Nancy***************/
	}
}