import static java.lang.System.out;
import java.util.Hashtable;
import java.util.Set;

class invertHash {
	public static void main(String[] args) {
		Hashtable<String, String> inpTable = new Hashtable<String, String>();

		inpTable.put("name", "Zaphod");
		inpTable.put("charm", "high");
		inpTable.put("morals", "dicey");

		out.println(invHash(inpTable));
	}

	private static Hashtable<String, String> invHash(Hashtable<String, String> tableToInv) {
		Hashtable<String, String> resTable = new Hashtable<String, String>();
		Set<String> keys = tableToInv.keySet();

		for (String key : keys) {
			resTable.put(tableToInv.get(key), key);
		}

		return resTable;
	}
}
