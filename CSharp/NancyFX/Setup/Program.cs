using System;
using DbConnection;

/******************Add these for Nancy*******************/
using System.IO;
using Microsoft.AspNetCore.Hosting;
/******************Add these for Nancy*******************/

namespace ChangeMe //Change this to something useful!
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

        /**********************Access DB**********************/
        string Query = "SELECT * FROM users";
        List<Dictionary<string, object>> users = DbConnector.ExecuteQuery(Query);
        //OR
        string Query = $"INSERT INTO users (name, email, created_at) VALUES ('{NameVariable}', '{EmailVariable}', NOW())";
        DbConnector.ExecuteQuery(Query);
        /**********************Access DB**********************/
        }
    }
}
