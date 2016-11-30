using System;
using ConsoleWithDb;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Read()
        {
            string query = "SELECT * FROM users";
            var result = DbConnector.ExecuteQuery(query);
            Console.WriteLine("************************************************************************");
            foreach (var user in result)
            {
                Console.WriteLine("ID: " + user["id"] + ", " + user["first_name"] + " " + user["last_name"] + "'s favorite number is " + user["favorite_number"]);
            }
            Console.WriteLine("************************************************************************");
        }

        public static void Create()
        {   
            Console.WriteLine("Please enter your first name:");
            string first = Console.ReadLine();
            Console.WriteLine("Please enter your last name:");
            string last = Console.ReadLine();
            Console.WriteLine("Please enter your favorite number:");
            string num = Console.ReadLine();
            string query = $"INSERT INTO users (first_name, last_name, favorite_number, created_at, updated_at) VALUES (\"{first}\", \"{last}\", \"{num}\", NOW(), NOW());";
            DbConnector.ExecuteQuery(query);
            Read();
        }

        public static void Update()
        {   
            Console.WriteLine("Please enter the ID of the user whose information you would like to update:");
            string id = Console.ReadLine();
            Console.WriteLine("Updated first name:");
            string first = Console.ReadLine();
            Console.WriteLine("Updated last name:");
            string last = Console.ReadLine();
            Console.WriteLine("Updated favorite number:");
            string num = Console.ReadLine();
            string query = $"UPDATE users SET first_name=\"{first}\", last_name=\"{last}\", favorite_number=\"{num}\", updated_at=NOW() WHERE id={id}";
            DbConnector.ExecuteQuery(query);
            Read();
        }

        public static void Delete()
        {
            Console.WriteLine("Please enter the ID number of the user you would like to delete:");
            string id = Console.ReadLine();
            string query = $"DELETE FROM users WHERE users.id={id};";
            DbConnector.ExecuteQuery(query);
            Read();
        }

        public static void Main(string[] args)
        {
            Read();
            bool ask = true;
            while (ask)
            {
                Console.WriteLine("What would you like to do? (Options are 'create', 'read', 'update', 'delete', and 'exit'):");
                string command = Console.ReadLine();
                switch (command)
                {
                    case "create":
                        Create();
                        break;
                    case "read":
                        Read();
                        break;
                    case "update":
                        Update();
                        break;
                    case "delete":
                        Delete();
                        break;
                    case "exit":
                        ask = false;
                        break;
                }
            }
        }
    }
}
