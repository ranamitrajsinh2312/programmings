// public class Problem70_CircleNumberPattern {
//     public static void main(String[] args) {

//         int n = 5, layer;
//         int size = 2 * n - 1;

//         for (int i = 1; i <= size; i++) {
//             for (int j = 1; j <= size; j++) {
//                 if (i <= j && i + j <= size + 1) {
//                     layer = i;
//                 } else if (i >= j && i + j >= size + 1) {
//                     layer = size - i + 1;
//                 } else if (i >= j && i + j <= size + 1) {
//                     layer = j;
//                 } else {
//                     layer = size - j + 1;
//                 }
//                 System.out.print(n - layer + 1 + " ");

//             }
//             System.out.println();
//         }
//     }
// }

import java.util.Scanner;

public class Problem70_CircleNumberPattern {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter n: ");
        int n = sc.nextInt();
        int size = 2 * n - 1;

        for (int i = 1; i <= size; i++) {          // Row loop
            for (int j = 1; j <= size; j++) {      // Column loop

                int num = n;                       // Start from outer layer (n)

                // Third loop → determines how deep inside the layer we are
                for (int k = 1; k < n; k++) {
                    // check if (i, j) lies inside the next inner square
                    if (i > k && j > k && i <= size - k && j <= size - k) {
                        num--;                     // move one layer inward
                    }
                }

                System.out.print(num + " ");
            }
            System.out.println();
        }
   
    }
}
