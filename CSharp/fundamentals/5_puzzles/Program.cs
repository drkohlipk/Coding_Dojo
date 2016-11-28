using System;

namespace ConsoleApplication
{
    public class Program
    {
        public static string strArr(int[] arr)
         {
             string x = "[";

             for (int i = 0; i < arr.Length-1; i++)
             {
                 x += arr[i].ToString() + ", ";
             }

             x += arr[arr.Length-1] + "]";

             return x;
         }

        public static int[] RandomArray()
        {
            int[] array = new int[10];
            Random rnd = new Random();
            int max = int.MinValue,
                min = int.MaxValue,
                sum = 0;

            for (int i = 0; i < 10; i++)
            {
                array[i] = rnd.Next(5, 26);
                if (array[i] > max)
                {
                    max = array[i];
                }
                if (array[i] < min)
                {
                    min = array[i];
                }
                sum += array[i];
            }
            Console.WriteLine(max + ", " + min + ", " + sum);
            return array;
        }

        public static string TossCoin(Random rnd)
        {
            Console.WriteLine("Tossing a Coin!");
            rnd = (rnd == null) ? new Random() : rnd;
            int side = rnd.Next(0,2);
            string result;
            if (side == 0)
            {
                result = "Heads";
            }
            else {
                result = "Tails";
            }
            Console.WriteLine(result);
            return result;
        }

        public static double TossMultipleCoins(int num)
        {
            double ratio = 0.0;
            Random rnd = new Random();
            for (int i = 1; i <= num; i++)
            {
                string flip = TossCoin(rnd);
                if (flip == "Heads")
                {
                    ratio++;
                }
            }

            ratio /= num;
            return ratio;
        }

        public static string Names(string[] arr)
        {
            string[] strArr = new string[arr.Length];
            Random rnd = new Random();
            string result = "[";

            for (int i = 0; i < arr.Length; i++)
            {
                int idx = rnd.Next(0,arr.Length);
                if (strArr[idx] != null)
                {
                    idx = rnd.Next(0,arr.Length);
                    i -= 1;
                    continue;
                }
                strArr[idx] = arr[i];
            }

            foreach (string name in strArr)
            {
                Console.WriteLine(name);
            }

            for (int j = 0; j < strArr.Length-1; j++)
            {
                if (strArr[j].Length > 5) {
                    result += strArr[j] + ", ";                    
                }
            }
            result += strArr[strArr.Length-1] + "]";

            return result;
        }

        public static void Main(string[] args)
        {
            string[] x = {"Todd","Tiffany","Charlie","Geneva","Sydney"};
            // Console.WriteLine(strArr(RandomArray()));
            Console.WriteLine(Names(x));
        }
    }
}
