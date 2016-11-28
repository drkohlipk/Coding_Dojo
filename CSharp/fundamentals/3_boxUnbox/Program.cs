using System;
using System.Collections.Generic;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            int sum = 0;
            List<object> box = new List<object>();
            box.Add(7);
            box.Add(28);
            box.Add(-1);
            box.Add(true);
            foreach (var item in box)
            {
                if (item is int)
                {
                    int tempitem = (int)item;
                    sum += tempitem;
                }
            }
            Console.WriteLine(sum);
        }
    }
}
