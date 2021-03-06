﻿using System;

/******************Add these for ASP.NET Core MVC*******************/
using System.IO;
using Microsoft.AspNetCore.Hosting;
/******************Add these for ASP.NET Core MVC*******************/

namespace YourNamespace //Change this to match the app namespace!
{
    public class Program
    {
        public static void Main(string[] args)
        {
        /********************Add for ASP.NET Core MVC********************/
            IWebHost host = new WebHostBuilder()
                .UseIISIntegration() ////add this for Azure deployment
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseKestrel()
                .UseStartup<Startup>()
                .Build();
            host.Run();
        /********************Add for ASP.NET Core MVC********************/
        }
    }
}