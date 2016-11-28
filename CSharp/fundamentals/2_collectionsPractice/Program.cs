// using System;

// namespace ConsoleApplication
// {
//     public class Program
//     {
//         public static void Main(string[] args)
//         {
//             int[] arr1 = new int[10];
//             string[] arr2 = {"Tim", "Martin", "Nikki", "Sara"};
//             bool[] arr3 = new bool[10];
//             for (int i = 0; i < 10; i += 2)
//             {
//                 arr3[i] = true;
//             }
//         }
//     }
// }

using System;
using System.Collections.Generic;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Dictionary<string,string> timProf = new Dictionary<string,string>();
            timProf.Add("Name", "Tim");
            timProf.Add("Sport", "Basketball");
            timProf.Add("Pets", "8");
            timProf.Add("Ice Cream", "False");
            Dictionary<string,string> martinProf = new Dictionary<string,string>();
            martinProf.Add("Name", "Martin");
            martinProf.Add("Sport", "Baseball");
            martinProf.Add("Pets", "2");
            martinProf.Add("Ice Cream", "True");
            Dictionary<string,string> nikkiProf = new Dictionary<string,string>();
            nikkiProf.Add("Name", "Nikki");
            nikkiProf.Add("Sport", "Softball");
            nikkiProf.Add("Pets", "3");
            nikkiProf.Add("Ice Cream", "True");
            Dictionary<string,string> saraProf = new Dictionary<string,string>();
            saraProf.Add("Name", "Sara");
            saraProf.Add("Sport", "Lacrosse");
            saraProf.Add("Pets", "1");
            saraProf.Add("Ice Cream", "False");
            List<Dictionary<string,string>> users = new List<Dictionary<string,string>>(); 
            users.Add(timProf);
            users.Add(martinProf);
            users.Add(nikkiProf);
            users.Add(saraProf);
            foreach (var dict in users)
            {
                foreach (KeyValuePair<string,string> attr in dict)
                {
                    Console.WriteLine(attr.Key + " - " + attr.Value);
                }
            }
        }
    }
}