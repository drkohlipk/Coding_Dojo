import helpers19mar.Node;
import java.util.HashMap;

class radixSort {
	public static int getBiggestDigit(int[] arr) {
		int min = arr[0],
			max = arr[0],
			digit = 0;

		for (int i = 1; i < arr.length; i++) {
			if (arr[i] < min) min = arr[i];
			if (arr[i] > max) max = arr[i];
		}

		max = Math.abs(max) > Math.abs(min) ? Math.abs(max) : Math.abs(min);

		while (max > 0) {
			max /= 10;
			digit++;
		}

		return digit;
	}

	public static HashMap<Integer, Node> makeMap(int[] arr, int digit) {
		HashMap<Integer, Node> resMap = new HashMap<Integer, Node>();
		int div = (int)Math.pow(10, digit);

		for (int i = 0; i < arr.length; i++) {
			int subVal = arr[i]/(div * 10),
				key = (int)Math.floor((arr[i] - subVal) / div);

			if (resMap.containsKey(key)) {
				Node keyNode = resMap.get(key);
				keyNode.addBack(arr[i]);
				resMap.put(key, keyNode);
			} else {
				Node keyNode = new Node(arr[i]);
				resMap.put(key, keyNode);
			}
		}
		return resMap;
	}

	public static void makeArr(int[] arr, HashMap<Integer, Node> map) {
		int i = 0;
		for (HashMap.Entry<Integer, Node> entry : map.entrySet()) {
			Node currNode = entry.getValue();

			while (currNode != null) {
				arr[i] = currNode.value;
				i++;
				currNode = currNode.next;
			}
		}
	}

	public static void radixSort(int[] arr) {
		if (arr.length < 2) return;

		int currDigit = 0,
			maxDigit = getBiggestDigit(arr);

		while (currDigit <= maxDigit) {
			HashMap<Integer, Node> currMap = makeMap(arr, currDigit);
			makeArr(arr, currMap);
			currDigit++;
		}
	}

	public static void main(String[] args) {
		int[] inpArr = {14, 111111111, 95, 328, 29, 15792444, 123489};

		radixSort(inpArr);

		for (int i = 0; i < inpArr.length; i++) {
			System.out.print(" ");
			System.out.print(inpArr[i]);
		}
		System.out.println("");
	}
}
