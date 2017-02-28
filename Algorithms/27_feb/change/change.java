import java.util.LinkedHashMap;
import static java.lang.System.out;

class change {
	private static LinkedHashMap<String, Integer> curr = new LinkedHashMap<String, Integer>();

	private static LinkedHashMap<String, Integer> makeChange(int value) {
		LinkedHashMap<String, Integer> change = new LinkedHashMap<String, Integer>();
		for (String key: curr.keySet()) {
			if (value <= 0) break;
			int diff = value / curr.get(key);
			if (diff >= 1) {
				change.put(key, diff);
				value -= curr.get(key) * diff;
			}
		}
		return change;
	}

	public static void main(String[] args) {
		curr.put("quarter", 25);
		curr.put("dime", 10);
		curr.put("nickel", 5);
		curr.put("penny", 1);
		out.println(makeChange(94));
	}
}
