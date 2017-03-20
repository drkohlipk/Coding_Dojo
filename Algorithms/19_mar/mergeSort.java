class mergeSort {
    public static void mergeSort(int[] arr) {
        int[] helper = new int[arr.length];
        mergeSort(arr, helper, 0, arr.length - 1);
    }

    public static void mergeSort(int[] arr, int[] helper, int low, int high) {
        if (low < high) {
            int mid = (int) Math.floor((low + high) / 2);
            mergeSort(arr, helper, low, mid);
            mergeSort(arr, helper, mid + 1, high);
            merge(arr, helper, low, mid, high);
        }
    }

    public static void merge(int[] arr, int[] helper, int low, int mid, int high) {
        for (int i = low; i <= high; i++) {
            helper[i] = arr[i];
        }

        int curr = low,
            left = low,
            right = mid + 1;

        while (curr <= high) {
            if (right > high || (left <= mid && helper[left] < helper[right])) {
                arr[curr] = helper[left];
                left++;
            } else if (left > mid || (right <= high && helper[right] <= helper[left])) {
                arr[curr] = helper[right];
                right++;
            }
            curr++;
        }
    }

    public static void main(String[] args) {
        int[] arr = {8,6,5,7,3,0,9,1};

        mergeSort(arr);

        for (int i = 0; i < arr.length; i++) {
            System.out.print(' ');
            System.out.print(arr[i]);
        }
    }
}
