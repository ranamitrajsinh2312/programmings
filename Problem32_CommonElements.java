public class Problem32_CommonElements {
    public static void main(String[] args) {
        //common elements bitween Two Elements
        int[] arr1 = {1, 2, 3, 4, 5};
        int[] arr2 = {3, 4, 5, 6, 7};
        for (int i = 0; i < arr1.length; i++) {
            for (int j = 0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j]) {
                    System.err.println("Intersection :"+arr1[i]);
                }
                 if (arr1[i] != arr2[j]) {
                    System.err.println("Union :"+arr1[i]);
                }
            }
        }
    }
}
