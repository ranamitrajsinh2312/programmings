import java.util.Scanner;

public class Problem19_KarpekarNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();

        int sq = n * n;
        int num = n;
        int d = 0;
        
        while (num > 0) {
            d++;
            num /= 10;
        }

        int right = sq % (int) Math.pow(10, d);
        int left = sq / (int) Math.pow(10, d);

        if (left + right == n)
            System.out.println(n + " is a Kaprekar number.");
        else
            System.out.println(n + " is NOT a Kaprekar number.");

        sc.close();
    }
}
