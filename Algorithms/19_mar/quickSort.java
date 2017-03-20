class quickSort {
	public static void swap(int[] arr, int idx1, int idx2) {
		int temp = arr[idx1];
		arr[idx1] = arr[idx2];
		arr[idx2] = temp;
	}

	public static int partition(int[] arr, int left, int right) {
		int partIdx = left,
			partVal = arr[right];

		for (int i = left; i < right; i++) {
			if (arr[i] < partVal) {
				swap(arr, i, partIdx);
				partIdx++;
			}
		}

		swap(arr, partIdx, right);

		return partIdx;
	}

	public static void quickSort(int[] arr, int left, int right) {
		if (left < right) {
			int partIdx = partition(arr, left, right);

			quickSort(arr, left, partIdx - 1);
			quickSort(arr, partIdx + 1, right);
		}
	}

	public static void quickSort(int[] arr) {
		quickSort(arr, 0, arr.length - 1);
	}

	public static void main(String[] args) {
		int[] inpArr = {1,2,3,4,5,6,7,8,9};

		quickSort(inpArr);

		for (int i = 0; i < inpArr.length; i++) {
			System.out.print(" ");
			System.out.print(inpArr[i]);
		}
	}
}
