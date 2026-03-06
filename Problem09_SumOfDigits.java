import java.util.Scanner;

public class Problem09_SumOfDigits {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        int originalNum = num;
        int sum = 0;
        
        while (num > 0) {
            int digit = num % 10;
            sum += digit;
            num = num / 10;
        }
        
        System.out.println("Sum of digits of " + originalNum + " is: " + sum);
        sc.close();
    }
}