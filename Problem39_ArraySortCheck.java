public class Problem39_ArraySortCheck {
    static boolean isSort(int i, int j, int[] arr) {
        if (i >= j)
            return true;

        if (arr[i] > arr[i + 1])
            return false;

        return isSort(i + 1, j, arr);
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5,4};

        if (isSort(0, arr.length - 1, arr))
            System.out.println("Array is sorted");
        else
            System.out.println("Array is not sorted");
    }
}
