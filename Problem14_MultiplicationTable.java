import java.util.Scanner;

public class Problem14_MultiplicationTable {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        
        System.out.print("Enter how many terms: ");
        int terms = sc.nextInt();
        
        System.out.println("Multiplication table of " + num + ":");
        for (int i = 1; i <= terms; i++) {
            System.out.println(num + " x " + i + " = " + (num * i));
        }
        
        sc.close();
    }
}