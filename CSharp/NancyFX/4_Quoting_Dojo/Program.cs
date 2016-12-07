using System.Collections.Generic;

/******************Add these for Nancy*******************/
using System.IO;
using Microsoft.AspNetCore.Hosting;
/******************Add these for Nancy*******************/

namespace QuotingDojo
{
    public class Program
    {
        public static void Main(string[] args)
        {
        /********************Add for Nancy********************/
            IWebHost host = new WebHostBuilder()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseKestrel()
                .UseStartup<Startup>()
                .Build();
            host.Run();
        /********************Add for Nancy********************/
        }
    }
}
