import java.util.HashMap;
import static java.lang.System.out;

class maxMinAvg {
	private static int[] inpArr = {5, 8, 2, 14, 25, 9};

	private static HashMap<String, Float> getMaxMinAvg(int[] arr) {
		HashMap<String, Float> maxMinAvg = new HashMap<String, Float>();
		maxMinAvg.put("Max", (float)arr[0]);
		maxMinAvg.put("Min", (float)arr[0]);
		maxMinAvg.put("Avg", (float)arr[0]);

		for (int i = 1; i < arr.length; i++) {
			if (arr[i] > maxMinAvg.get("Max")) {
				maxMinAvg.put("Max", (float)arr[i]);
			}
			if (arr[i] < maxMinAvg.get("Min")) {
				maxMinAvg.put("Min", (float)arr[i]);
			}
			maxMinAvg.put("Avg", maxMinAvg.get("Avg") + (float)arr[i]);
		}

		maxMinAvg.put("Avg", maxMinAvg.get("Avg") / (float)arr.length);

		return maxMinAvg;
	}

	public static void main(String[] args) {
		out.println(getMaxMinAvg(inpArr));
	}
}
