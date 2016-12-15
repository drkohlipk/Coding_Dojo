using System;
using System.Linq;
using System.Collections.Generic;
using ConsoleCRUD.Models;

namespace ConsoleCRUD
{
    public class Program
    {
        public static void Read()
        {
            Console.Clear();
            using(var db = new CRUDContext())
            {
                IEnumerable<User> ReturnedValues = db.Users;
                Console.WriteLine("************************************************************************");
                if (ReturnedValues != null)
                {
                    foreach (var user in ReturnedValues)
                    {
                        Console.WriteLine("ID: " + user.id + ", " + user.first_name + " " + user.last_name);
                    }
                }
                Console.WriteLine("************************************************************************");
            }
        }

        public static void Create()
        {   
            Read();
            Console.WriteLine("Please enter your first name:");
            string first = Console.ReadLine();
            Console.WriteLine("Please enter your last name:");
            string last = Console.ReadLine();
            using(var db = new CRUDContext())
            {
                User NewUser = new User
                {
                    first_name = first,
                    last_name = last
                };
                db.Add(NewUser);
                db.SaveChanges();
            }
        }

        public static void Update()
        {   
            Read();
            Console.WriteLine("Please enter the ID of the user whose information you would like to update:");
            ConsoleKeyInfo chart = Console.ReadKey();
            int id = int.Parse(chart.KeyChar.ToString());
            Read();
            Console.WriteLine("Updated first name:");
            string first = Console.ReadLine();
            Console.WriteLine("Updated last name:");
            string last = Console.ReadLine();
            using(var db = new CRUDContext())
            {
                User RetrievedUser = db.Users.SingleOrDefault(user => user.id == id);
                RetrievedUser.first_name = first;
                RetrievedUser.last_name = last;
                db.SaveChanges();
            }
            Read();
        }

        public static void Delete()
        {
            Read();
            Console.WriteLine("Please enter the ID number of the user you would like to delete:");
            ConsoleKeyInfo chart = Console.ReadKey();
            int id = int.Parse(chart.KeyChar.ToString());
            using(var db = new CRUDContext())
            {
                User RetrievedUser = db.Users.SingleOrDefault(user => user.id == id);
                db.Users.Remove(RetrievedUser);
                db.SaveChanges();
            }
        }

        public static void Main(string[] args)
        {
            bool ask = true;
            while (ask)
            {
                Read();
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
