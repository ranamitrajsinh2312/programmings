import java.util.Scanner;

public class Problem07_ArmstrongNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        int originalNum = num;
        int sum = 0;
        int digits = 0;
        
        // Count number of digits
        int temp = num;
        while (temp != 0) {
            digits++;
            temp = temp / 10;
        }
        
        // Calculate sum of powers
        temp = num;
        while (temp != 0) {
            int digit = temp % 10;
            sum += Math.pow(digit, digits);
            temp = temp / 10;
        }
        
        if (originalNum == sum) {
            System.out.println(originalNum + " is an Armstrong number");
        } else {
            System.out.println(originalNum + " is not an Armstrong number");
        }
        
        sc.close();
    }
}