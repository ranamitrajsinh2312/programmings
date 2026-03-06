public class Problem66_PascalTriangle {

    public static void main(String[] args) {
        int n = 7;

        for (int i = 0; i < n; i++) {
            int num = 1;

            // spaces
            for (int s = n; s > i; s--) {
                System.out.print(" ");
            }

            // numbers
            for (int j = 0; j <= i; j++) {
                System.out.print(num + " ");
                num = num * (i - j) / (j + 1);
            }
            System.out.println();
        }
    }
}



    // public static void main(String[] args) {
//         int n = 7;
//         int arr[][] = new int[n][n];

//         // Build Pascal's Triangle
//         for (int i = 0; i < n; i++) {
//             for (int j = 0; j <= i; j++) {
//                 if (j == 0 || j == i) {
//                     arr[i][j] = 1;
//                 } else {
//                     arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
//                 }
//             }
//         }

//         // Print Pascal's Triangle with spaces for pyramid shape
//         for (int i = 0; i < n; i++) {
//             // Print leading spaces
//             for (int k = n; k > i + 1; k--) {
//                 System.out.print(" ");
//             }
//             // Print numbers
//             for (int j = 0; j <= i; j++) {
//                 System.out.print(arr[i][j] + " ");
//             }
//             System.out.println();
//         }
//     }
// }
// public class PascaleTriangle {