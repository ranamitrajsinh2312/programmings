import java.util.Scanner;

public class Problem13_LCM {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter first number: ");
        int num1 = sc.nextInt();
        
        System.out.print("Enter second number: ");
        int num2 = sc.nextInt();
        
        int lcm = findLCM(num1, num2);
        
        System.out.println("LCM of " + num1 + " and " + num2 + " is: " + lcm);
        sc.close();
    }
    
    public static int findGCD(int a, int b) {
        if (b == 0) {
            return a;
        }
        return findGCD(b, a % b);
    }
    
    public static int findLCM(int a, int b) {
        return (a * b) / findGCD(a, b);
    }
}