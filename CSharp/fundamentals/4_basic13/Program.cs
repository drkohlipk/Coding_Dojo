using System;
using System.Collections.Generic;

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

        public static void print255()
        {
            for (int i = 1; i <= 255; i++)
            {
                Console.WriteLine(i);
            }
        }

        public static void printOdd255()
        {
            for (int i = 1; i <= 255; i += 2)
            {
                Console.WriteLine(i);
            }
        }

        public static void printSum()
        {
            int sum = 0;
            for (int i = 0; i <= 255; i++)
            {
                sum += i;
                Console.WriteLine("New number: {0} Sum: {1}", i, sum);
            }
        }

        public static void printArr(int[] arr)
        {
            // for (int i = 0; i < arr.Length; i++)
            // {
            //     Console.WriteLine(arr[i]);
            // }

            foreach (int idx in arr)
            {
                Console.WriteLine(idx);
            }
        }

        public static int findMax(int[] arr)
        {
            int max = int.MinValue;

            foreach (int val in arr)
            {
                if (val > max)
                {
                    max = val;
                }
            }

            return max;
        }

        public static int getAvg(int[] arr)
        {
            int avg = 0;

            foreach (int val in arr)
            {
                avg += val;
            }

            avg = avg/arr.Length;
            return avg;
        }

        public static List<int> oddArr()
        {
            List<int> array1 = new List<int>();

            for (int i = 1; i <= 255; i += 2)
            {
                array1.Add(i);
            }

            return array1;
        }

        public static int greaterThanY(int[] arr, int Y)
        {
            int count = 0;

            foreach (int val in arr)
            {
                if (val > Y)
                {
                    count++;
                }
            }

            return count;
        }

        public static int[] squareArr(int[] arr)
        {
            for (int i = 0; i < arr.Length; i++)
            {
                arr[i] *= arr[i];
            }

            return arr;
        }

        public static int[] elimNeg(int[] arr)
        {
            for (int i = 0; i < arr.Length; i++)
            {
                if (arr[i] < 0)
                {
                    arr[i] = 0;
                }
            }

            return arr;
        }

        public static void minMaxAvg(int[] arr)
        {
            int min = int.MaxValue,
                max = int.MinValue,
                avg = 0;
            
            foreach (int val in arr)
            {
                if (val > max)
                {
                    max = val;
                }
                if (val < min)
                {
                    min = val;
                }
                avg += val;
            }
            avg /= arr.Length;
            Console.WriteLine(max + ", " + min + ", " + avg);
        }

        public static int[] shiftArr(int[] arr)
        {
            for (int i = 0; i < arr.Length - 1; i++)
            {
                arr[i] = arr[i+1];
            }

            arr[arr.Length-1] = 0;

            return arr;
        }

        public static List<object> num2Str(int[] arr)
        {
            List<object> array1 = new List<object>();
            for (int i = 0; i < arr.Length; i++)
            {
                if (arr[i] < 0)
                {
                    array1.Add("Dojo");
                } 
                else
                {
                    array1.Add(arr[i]);
                }
            }
            return array1;
        }

        public static void Main(string[] args)
        {
        }
    }
}
