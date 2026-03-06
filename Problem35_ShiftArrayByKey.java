public class Problem35_ShiftArrayByKey {
    public static void main(String[] args) {


        ///
        int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        //789123456
      
        int key = 3;
        int n = arr.length;

        for (int i = 0; i < key; i++) {
            int last = arr[n - 1];
            for (int j = n - 1; j > 0; j--) {
                arr[j] = arr[j - 1];
            }
            arr[0] = last;
        }
        for (int i=0;i<n;i++){
            System.out.print(arr[i]+" ");
        }
    }
}
