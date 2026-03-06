import java.util.Scanner;

public class Problem08_PerfectNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        int sum = 0;
        
        // Find all divisors and sum them
        for (int i = 1; i < num; i++) {
            if (num % i == 0) {
                sum += i;
            }
        }
        
        if (sum == num && num > 0) {
            System.out.println(num + " is a Perfect number");
        } else {
            System.out.println(num + " is not a Perfect number");
        }
        
        sc.close();
    }
}