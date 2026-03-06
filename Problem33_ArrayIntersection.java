public class Problem33_ArrayIntersection {
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4, 5, 1, 1, 1, 1, 1};
        int[] arr2 = {3, 4, 5, 6, 7, 1, 1, 1};

        int[] arr3 = new int[Math.min(arr1.length, arr2.length)];
        int k = 0;

        for (int i = 0; i < arr1.length; i++) {
            for (int j = 0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j]) {
                    boolean alreadyAdded = false;
                    for (int m = 0; m < k; m++) {
                        if (arr3[m] == arr1[i]) {
                            alreadyAdded = true;
                            break;
                        }
                    }
                    if (!alreadyAdded) {
                        arr3[k] = arr1[i];
                        k++;
                    }
                    break;
                }
            }
        }
        System.out.print("Intersection: ");
        for (int i = 0; i < k; i++) {
            System.out.print(arr3[i] + " ");
        }
    }
}
