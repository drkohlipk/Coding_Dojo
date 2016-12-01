using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace GreatNumberGame
{
    public class Program
    {
        public static int MakeRando()
        {
            Random rnd = new Random();
            int rando = rnd.Next(1,101);
            return rando;
        }
        public static void Main(string[] args)
        {
            IWebHost host = new WebHostBuilder()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseKestrel()
                .UseStartup<Startup>()
                .Build();
            host.Run();
        }
    }
}
