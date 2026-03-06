
    // Check if a number is a happy number
//         int num = 19; // Example number
//         int slow = num;
//         int fast = num;

//         do {
//             slow = getNext(slow); // Move one step
//             fast = getNext(getNext(fast)); // Move two steps
//         } while (slow != fast);

//         if (slow == 1) {
//             System.out.println(num + " is a happy number.");
//         } else {
//             System.out.println(num + " is not a happy number.");
//         }
//     }

//     private static int getNext(int num) {
//         int sum = 0;
//         while (num > 0) {
//             int digit = num % 10;
//             sum += digit * digit;
//             num /= 10;
//         }
//         return sum;
//     }
    
// }
import java.util.Scanner;
public class Problem15_HappyNumber {

    
    public static int getSumOfSquares(int num) {
        int sum = 0;
        while (num > 0) {
            int digit = num % 10; 
            sum += digit * digit; 
            num /= 10;            
        }
        return sum;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();

        int result = num; 
        while (result != 1 && result != 4) {
            result = getSumOfSquares(result);
        }

        if (result == 1) {
            System.out.println(num + " is a Happy Number");
        } else {
            System.out.println(num + " is not a Happy Number");
        }

    }
}