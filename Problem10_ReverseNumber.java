import java.util.Scanner;

public class Problem10_ReverseNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        int originalNum = num;
        int reversedNum = 0;
        
        while (num > 0) {
            int digit = num % 10;
            reversedNum = reversedNum * 10 + digit;
            num = num / 10;
        }
        
        System.out.println("Original number: " + originalNum);
        System.out.println("Reversed number: " + reversedNum);
        sc.close();
    }
}