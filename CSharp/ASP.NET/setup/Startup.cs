/*********************Add this to Startup!!**********************/
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Hosting;

public IConfiguration Configuration { get; private set; } //put this inside of the Startup class

public Startup(IHostingEnvironment env)
{
    var builder = new ConfigurationBuilder()
    .SetBasePath(env.ContentRootPath)
    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
    .AddEnvironmentVariables();
    Configuration = builder.Build();
}

public void ConfigureServices(IServiceCollection services)
{
    // Add framework services.
    ...
	services.AddScoped<QuoteFactory>();
    services.Configure<MySqlOptions>(Configuration.GetSection("DBInfo"));
    ...
}