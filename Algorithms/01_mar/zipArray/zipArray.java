import static java.lang.System.out;
import java.util.HashMap;

class zipArray {
	private static String[] firstArr = {"abc", "3", "yo"};
	private static String[] secondArr = {"42", "wassup", "true"};

	public static void main(String[] args) {
		out.println(zipArr(firstArr, secondArr));
	}

	private static HashMap<String, String> zipArr(String[] arr1, String[] arr2) {
		HashMap<String, String> resMap = new HashMap<String, String>();

		int n = arr1.length > arr2.length ? arr2.length : arr1.length;

		for (int i = 0; i < n; i++) {
			resMap.put(arr1[i], arr2[i]);
		}

		return resMap;
	}
}
