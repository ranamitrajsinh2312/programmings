import java.util.Scanner;

public class Problem06_FibonacciSeries {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of terms: ");
        int n = sc.nextInt();
        
        int first = 0, second = 1;
        
        if (n >= 1) {
            System.out.print("Fibonacci Series: " + first);
        }
        if (n >= 2) {
            System.out.print(", " + second);
        }
        
        for (int i = 2; i < n; i++) {
            int next = first + second;
            System.out.print(", " + next);
            first = second;
            second = next;
        }
        
        System.out.println();
        sc.close();
    }
}