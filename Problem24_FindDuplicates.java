public class Problem24_FindDuplicates {

    public static void main(String[] args) {

        int[] arr = {1, 1, 1, 3, 2, 4, 5};
        int len = arr.length;

        System.out.println("Duplicate elements:");

        for (int i = 0; i < len; i++) {

            int index = Math.abs(arr[i]) - 1;

            if (arr[index] < 0) {
                System.out.println(index + 1);
                arr[index] = 0;
            } else {
                arr[index] = -arr[index];
            }
        }
    }
}
