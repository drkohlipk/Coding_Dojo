using System;

namespace ConsoleApplication
{
    public class Program
    {
        public static string stringify(int[] arr)
        {
            string array = "[";
            for (int i = 0; i < arr.Length - 1; i++)
            {
                array += arr[i].ToString() + ", ";
            }
            array += arr[arr.Length - 1] + "]";
            return array;
        }
        public static int[] array1 = {7,3,9,8,2,11,17,21,12};

		public static void Rev(int[] arr, int beg, int end)
		{
			for (int i = beg; i < (beg + end)/2; i++)
			{
				int temp = arr[i];
                arr[i] = arr[end-(i-beg)-1];
				arr[end-(i-beg)-1] = temp;
			}
		}

		public static void Rotate(int[] arr, int num)
		{
			int rots = num % arr.Length;
			if (rots == 0)
			{
				return;
			}
			Rev(arr, 0, (arr.Length-rots));
			Rev(arr, (arr.Length-rots), arr.Length);
			Rev(arr, 0, arr.Length);
		}

        public static void Main(string[] args)
        {
            Rotate(array1, 4);
            Console.WriteLine(stringify(array1));
        }
    }
}