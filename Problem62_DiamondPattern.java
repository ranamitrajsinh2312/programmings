import java.util.Scanner;

public class Problem62_DiamondPattern {
    public static void main(String[] args) {
        // Scanner scanner = new Scanner(System.in);
        // System.out.prir of rows for the diamond pattern: ");
        // int rows = scanner.nextInt();nt("Enter the numbe

        int n = 5;

        // Print the upper part of the diamond
        for (int i = 1; i <= n; i++) {
            // Print spaces
            for (int j = n; j > i; j--) {
                System.out.print(" ");
            }
            // Print stars
            for (int k = 1; k <= (2 * i - 1); k++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // Print the lower part of the diamond
        // for (int i = n - 1; i >= 1; i--) {
        //     // Print spaces
        //     for (int j = n; j > i; j--) {
        //         System.out.print(" ");
        //     }
        //     // Print stars
        //     for (int k = 1; k <= (2 * i - 1); k++) {
        //         System.out.print("*");
        //     }
        //     System.out.println();
        // }
        
       
    }
}
