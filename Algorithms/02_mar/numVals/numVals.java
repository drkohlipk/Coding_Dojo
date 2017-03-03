import static java.lang.System.out;
import java.util.Hashtable;
import java.util.Set;

class numVals {
	public static void main(String[] args) {
		Hashtable<String, String> inpMap = new Hashtable<String, String>();

		inpMap.put("band", "Travis Shredd & the Good 'ol Homeboys");
		inpMap.put("style", "Country/Metal/Rap");
		inpMap.put("album", "The Neighbor of the Beast");

		out.println(getCount(inpMap));
	}

	private static int getCount(Hashtable<String, String> countMap) {
		int count = 0;
		Set<String> keys = countMap.keySet();

		for (String key : keys) {
			count++;
		}

		return count;
	}
}
