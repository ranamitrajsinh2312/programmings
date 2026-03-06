import java.util.Scanner;
// factorial Recursive
// public class Fact {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         int num = sc.nextInt();
//         int fact = factorial(num);
//         System.out.println("Factorial of " + num + " is: " + fact);
//     }
//     static int factorial(int num){
//         if (num == 0){
//             return 1;
//         }
//         return num * factorial(num-1);
public class Problem02_Factorial {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int num = sc.nextInt();
        int fact = 1;
        for (int i=1; i<=num; i++){
            fact = fact * i;
        }
        System.out.println("Factorial of " + num + " is: " + fact);

    }
}



