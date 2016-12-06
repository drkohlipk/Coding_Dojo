using Nancy;
using Nancy.Configuration;
using Nancy.Session.Persistable;
using Nancy.Bootstrapper;
using Nancy.TinyIoc;
using Nancy.Session.InMemory;

namespace PokeInfo
{
	public class Bootstrapper : DefaultNancyBootstrapper
	{
		protected override void ApplicationStartup(TinyIoCContainer container, IPipelines pipelines)
		{
			PersistableSessions.Enable(pipelines, new InMemorySessionConfiguration());
		}
		public override void Configure(INancyEnvironment env)
		{
			env.Tracing(enabled: false, displayErrorTraces: true);
		}
	}
}