/*******************Add for Nancy*********************/
using Microsoft.AspNetCore.Builder;
using Nancy.Owin;
/*******************Add for Nancy*********************/

/***************Add for Error Logging*****************/
using Microsoft.Extensions.Logging;
/***************Add for Error Logging*****************/

namespace LogReg
{
	public class Startup
	{
		/*IApplicationBuilder app parameter for Nancy, ILoggerFactory LoggerFactory for Logging*/
		public void Configure(IApplicationBuilder app, ILoggerFactory LoggerFactory)
		{

		/***************Add for Error Logging*****************/
			LoggerFactory.AddConsole();
		/***************Add for Error Logging*****************/

		/********************Add for Nancy********************/
			app.UseOwin(x => x.UseNancy());
		/********************Add for Nancy********************/
		}
	}
}