// Enhanced JavaScript for Java Programming Problems Documentation
// Complete Problem Database with Dynamic Loading

class ProblemManager {
    constructor() {
        this.problemsData = {};
        this.currentProblem = null;
        this.currentCategory = null;
        this.initializeProblems();
        this.setupEventListeners();
    }

    // Initialize all problems with proper data
    initializeProblems() {
        // Complete Problem Database with all DS folder programs
        this.problemsData = {
    // Basic Programming Problems (01-20)
    problem01: {
        title: "Problem 01: Prime Number",
        difficulty: "Easy",
        category: "Basic Programming",
        description: "A program to check whether a given number is prime or not. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.",
        code: `public class Problem01_PrimeNumber {
    public static void main(String[] args) {
        int num = 13;
        boolean isPrime = true;
        for (int i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            System.out.println(num + " is a prime number");
        } else {
            System.out.println(num + " is not a prime number");
        }
    }
}`,
        output: `13 is a prime number`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    
    problem02: {
        title: "Problem 02: Factorial",
        difficulty: "Easy",
        category: "Basic Programming",
        description: "Calculate factorial of a number using iterative approach. Factorial of n (n!) is the product of all positive integers less than or equal to n.",
        code: `import java.util.Scanner;

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
}`,
        output: `Input: 5
Factorial of 5 is: 120`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    
    problem03: {
        title: "Problem 03: Even/Odd Count in Array",
        difficulty: "Easy",
        category: "Array Operations",
        description: "Count the number of even and odd numbers in a given array.",
        code: `public class Problem03_EvenOddCount {
    public static void main(String[] args) {
        int [] arr = {1,2,3,4,5,6,7};
        int countEven=0,countOdd=0;
        for (int i =0; i <arr.length;i++){
            if (arr[i]%2==0){
                countEven++;
            }
            else{
                countOdd++;
            }
        }
        System.out.println("Even Count :"+countEven);
        System.out.println("Odd Count :"+countOdd);
    }
}`,
        output: `Even Count :3
Odd Count :4`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    
    problem04: {
        title: "Problem 04: Even/Odd Checker",
        difficulty: "Easy",
        category: "Basic Programming",
        description: "Check whether a given number is even or odd.",
        code: `import java.util.Scanner;

public class Problem04_EvenOddChecker {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        
        if (num % 2 == 0) {
            System.out.println(num + " is an Even number");
        } else {
            System.out.println(num + " is an Odd number");
        }
        
        sc.close();
    }
}`,
        output: `Enter a number: 7
7 is an Odd number`,
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)"
    },
    
    problem05: {
        title: "Problem 05: Palindrome Number",
        difficulty: "Easy",
        category: "Basic Programming",
        description: "Check if a number is a palindrome. A palindrome number reads the same backward as forward.",
        code: `import java.util.Scanner;

public class Problem05_PalindromeNumber {
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
        
        if (originalNum == reversedNum) {
            System.out.println(originalNum + " is a Palindrome number");
        } else {
            System.out.println(originalNum + " is not a Palindrome number");
        }
        
        sc.close();
    }
}`,
        output: `Enter a number: 121
121 is a Palindrome number`,
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)"
    },
    
    problem06: {
        title: "Problem 06: Fibonacci Series",
        difficulty: "Easy",
        category: "Basic Programming",
        description: "Generate Fibonacci series up to n terms. Each number is the sum of the two preceding ones.",
        code: `import java.util.Scanner;

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
}`,
        output: `Enter the number of terms: 8
Fibonacci Series: 0, 1, 1, 2, 3, 5, 8, 13`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    
    problem07: {
        title: "Problem 07: Armstrong Number",
        difficulty: "Medium",
        category: "Basic Programming",
        description: "Check if a number is an Armstrong number. An Armstrong number is equal to the sum of its digits raised to the power of number of digits.",
        code: `import java.util.Scanner;

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
}`,
        output: `Enter a number: 153
153 is an Armstrong number`,
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)"
    },
    
    problem08: {
        title: "Problem 08: Perfect Number",
        difficulty: "Medium",
        category: "Basic Programming",
        description: "Check if a number is perfect. A perfect number is equal to the sum of its proper divisors.",
        code: `import java.util.Scanner;

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
}`,
        output: `Enter a number: 6
6 is a Perfect number`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    
    problem09: {
        title: "Problem 09: Sum of Digits",
        difficulty: "Easy",
        category: "Basic Programming",
        description: "Calculate the sum of digits of a given number.",
        code: `import java.util.Scanner;

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
}`,
        output: `Enter a number: 1234
Sum of digits of 1234 is: 10`,
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)"
    },
    
    problem10: {
        title: "Problem 10: Reverse Number",
        difficulty: "Easy",
        category: "Basic Programming",
        description: "Reverse the digits of a given number.",
        code: `import java.util.Scanner;

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
}`,
        output: `Enter a number: 1234
Original number: 1234
Reversed number: 4321`,
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)"
    },
    
    problem11: {
        title: "Problem 11: Simple Calculator",
        difficulty: "Easy",
        category: "Basic Programming",
        description: "Create a simple calculator to perform basic arithmetic operations.",
        code: `import java.util.Scanner;

public class Problem11_SimpleCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter first number: ");
        double num1 = sc.nextDouble();
        
        System.out.print("Enter second number: ");
        double num2 = sc.nextDouble();
        
        System.out.print("Enter operator (+, -, *, /): ");
        char operator = sc.next().charAt(0);
        
        double result = 0;
        boolean validOperation = true;
        
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 != 0) {
                    result = num1 / num2;
                } else {
                    System.out.println("Error: Division by zero!");
                    validOperation = false;
                }
                break;
            default:
                System.out.println("Error: Invalid operator!");
                validOperation = false;
        }
        
        if (validOperation) {
            System.out.println("Result: " + num1 + " " + operator + " " + num2 + " = " + result);
        }
        
        sc.close();
    }
}`,
        output: `Enter first number: 10
Enter second number: 5
Enter operator (+, -, *, /): *
Result: 10.0 * 5.0 = 50.0`,
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)"
    },
    
    problem12: {
        title: "Problem 12: GCD (Greatest Common Divisor)",
        difficulty: "Medium",
        category: "Basic Programming",
        description: "Find the Greatest Common Divisor of two numbers using Euclidean algorithm.",
        code: `import java.util.Scanner;

public class Problem12_GCD {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter first number: ");
        int num1 = sc.nextInt();
        
        System.out.print("Enter second number: ");
        int num2 = sc.nextInt();
        
        int gcd = findGCD(num1, num2);
        
        System.out.println("GCD of " + num1 + " and " + num2 + " is: " + gcd);
        sc.close();
    }
    
    public static int findGCD(int a, int b) {
        if (b == 0) {
            return a;
        }
        return findGCD(b, a % b);
    }
}`,
        output: `Enter first number: 48
Enter second number: 18
GCD of 48 and 18 is: 6`,
        timeComplexity: "O(log min(a,b))",
        spaceComplexity: "O(1)"
    },
    
    problem13: {
        title: "Problem 13: LCM (Least Common Multiple)",
        difficulty: "Medium",
        category: "Basic Programming",
        description: "Find the Least Common Multiple of two numbers using the relation LCM(a,b) = (a*b)/GCD(a,b).",
        code: `import java.util.Scanner;

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
}`,
        output: `Enter first number: 12
Enter second number: 18
LCM of 12 and 18 is: 36`,
        timeComplexity: "O(log min(a,b))",
        spaceComplexity: "O(1)"
    },
    
    problem14: {
        title: "Problem 14: Multiplication Table",
        difficulty: "Easy",
        category: "Basic Programming",
        description: "Generate multiplication table for a given number up to specified terms.",
        code: `import java.util.Scanner;

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
}`,
        output: `Enter a number: 5
Enter how many terms: 10
Multiplication table of 5:
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    
    problem15: {
        title: "Problem 15: Happy Number",
        difficulty: "Medium",
        category: "Basic Programming",
        description: "Check if a number is a happy number. A happy number eventually reaches 1 when replaced by sum of square of digits.",
        code: `import java.util.Scanner;

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
            System.out.println(num + " is a Happy number.");
        } else {
            System.out.println(num + " is not a Happy number.");
        }
        
        sc.close();
    }
}`,
        output: `Enter a number: 19
19 is a Happy number.`,
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)"
    },
    
    problem16: {
        title: "Problem 16: Pronic Number",
        difficulty: "Easy",
        category: "Basic Programming",
        description: "Check if a number is a pronic number. A pronic number is a number which is the product of two consecutive integers.",
        code: `public class Problem16_PronicNumber {
    public static void main(String[] args) {
        int num=20;
        boolean isPronic=false;
        for(int i=0;i<=num;i++){
            if(i*(i+1)==num){
                isPronic=true;
                break;
            }
        }
        if(isPronic){
            System.out.println(num+" is pronic number");
        }
        else{
            System.out.println(num+" is not pronic number");
        }
    }
}`,
        output: `20 is pronic number`,
        timeComplexity: "O(√n)",
        spaceComplexity: "O(1)"
    },
    
    problem17: {
        title: "Problem 17: Automorphic Number",
        difficulty: "Medium",
        category: "Basic Programming",
        description: "Check if a number is automorphic. An automorphic number's square ends with the number itself.",
        code: `import java.util.Scanner;

public class Problem17_AutomorphicNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number");
        int n = sc.nextInt();
        int sq = n*n;
        int temp = n;
        int rem = 0;
        boolean isAutomorphic = true;
        while(temp>0){
            rem = sq%10;
            sq = sq/10;
            if(rem != temp%10){
                isAutomorphic = false;
                break;
            }
            temp = temp/10;
        }
        System.out.println(isAutomorphic? +n+" is an automorphic number": +n+" is not an automorphic number");   
    }
}`,
        output: `Enter a number
25
25 is an automorphic number`,
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)"
    },
    
    problem18: {
        title: "Problem 18: Ugly Number",
        difficulty: "Medium",
        category: "Basic Programming",
        description: "Check if a number is ugly. An ugly number has only 2, 3, and 5 as prime factors.",
        code: `import java.util.Scanner;

public class Problem18_UglyNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter N");
        int num = sc.nextInt();
        boolean isUgly = true;
        for (int i = 2; i <= 5; i++) {
            while (num % i == 0) {
                num = num / i;
            }
        }
        if (num != 1) {
            isUgly = false;
        }
        System.out.println(isUgly ? "Ugly Number" : "Not an Ugly Number");
    }
}`,
        output: `Enter N
6
Ugly Number`,
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)"
    },
    
    problem19: {
        title: "Problem 19: Kaprekar Number",
        difficulty: "Medium",
        category: "Basic Programming",
        description: "Check if a number is a Kaprekar number. A Kaprekar number's square can be split into two parts that add up to the original number.",
        code: `import java.util.Scanner;

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
}`,
        output: `Enter a number: 297
297 is a Kaprekar number.`,
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)"
    },
    
    problem20: {
        title: "Problem 20: Decimal to Octal Conversion",
        difficulty: "Easy",
        category: "Basic Programming",
        description: "Convert decimal numbers to octal and vice versa.",
        code: `public class Problem20_DecimalToOctal {
    public static void main(String[] args) {
        // dec to oct
        int decimal = 10;
        int octal = 0;
        int i = 1;
        while (decimal != 0) {
            octal += (decimal % 8) * i;
            decimal /= 8;
            i *= 10;
        }
        System.out.println("Octal: " + octal);

        // oct to dec
        int oct = 12;
        int dec = 0;
        int j = 0;
        while (oct != 0) {
            dec += (oct % 10) * Math.pow(8, j);
            oct /= 10;
            j++;
        }
        System.out.println("Decimal: " + dec);
    }
}`,
        output: `Octal: 12
Decimal: 10`,
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)"
    },
    
    // Array Operations Problems (21-40)
    problem21: {
        title: "Problem 21: Linear Search",
        difficulty: "Easy",
        category: "Array Operations",
        description: "Search for an element in an array using linear search algorithm.",
        code: `import java.util.Scanner;

public class Problem21_LinearSearch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter the number of elements: ");
        int n = sc.nextInt();
        
        int[] arr = new int[n];
        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        System.out.print("Enter element to search: ");
        int searchElement = sc.nextInt();
        
        int position = linearSearch(arr, searchElement);
        
        if (position != -1) {
            System.out.println("Element " + searchElement + " found at position " + (position + 1));
        } else {
            System.out.println("Element " + searchElement + " not found in the array");
        }
        
        sc.close();
    }
    
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }
        }
        return -1;
    }
}`,
        output: `Enter the number of elements: 5
Enter 5 elements:
10 20 30 40 50
Enter element to search: 30
Element 30 found at position 3`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    
    problem22: {
        title: "Problem 22: Binary Search",
        difficulty: "Medium", 
        category: "Array Operations",
        description: "Search for an element in a sorted array using binary search algorithm.",
        code: `import java.util.Arrays;
import java.util.Scanner;

public class Problem22_BinarySearch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter the number of elements: ");
        int n = sc.nextInt();
        
        int[] arr = new int[n];
        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        Arrays.sort(arr);
        System.out.print("Sorted array: ");
        for (int element : arr) {
            System.out.print(element + " ");
        }
        System.out.println();
        
        System.out.print("Enter element to search: ");
        int searchElement = sc.nextInt();
        
        int position = binarySearch(arr, searchElement);
        
        if (position != -1) {
            System.out.println("Element " + searchElement + " found at position " + (position + 1));
        } else {
            System.out.println("Element " + searchElement + " not found in the array");
        }
        
        sc.close();
    }
    
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
                return mid;
            }
            
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;
    }
}`,
        output: `Enter the number of elements: 5
Enter 5 elements:
50 10 30 20 40
Sorted array: 10 20 30 40 50 
Enter element to search: 30
Element 30 found at position 3`,
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)"
    },
    
    problem23: {
        title: "Problem 23: Selection Sort",
        difficulty: "Medium",
        category: "Array Operations",
        description: "Sort an array using selection sort algorithm.",
        code: `import java.util.Scanner;

public class Problem23_SelectionSort {
    public static void selectionSort(int arr[]) {
        for (int i = 0; i < arr.length; i++) {
            int min = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            int temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int n = sc.nextInt();
        int[] arr = new int[n];

        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        selectionSort(arr);
        System.out.println("Sorted Array is:");
        for (int i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println(); 
    }
}`,
        output: `Enter the number: 5
Enter 5 elements:
64 34 25 12 22
Sorted Array is:
12 22 25 34 64`,
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)"
    },
    
    problem24: {
        title: "Problem 24: Find Duplicates",
        difficulty: "Medium",
        category: "Array Operations",
        description: "Find duplicate elements in an array using array manipulation technique.",
        code: `public class Problem24_FindDuplicates {
    public static void main(String[] args) {
        int[] arr = {1, 1, 1, 3, 2, 4, 5};
        int len = arr.length;

        System.out.println("Duplicate elements:");

        for (int i = 0; i < len; i++) {
            int index = Math.abs(arr[i]) - 1;

            if (arr[index] < 0) {
                System.out.println(index + 1);
                arr[index] = 0;
            } else {
                arr[index] = -arr[index];
            }
        }
    }
}`,
        output: `Duplicate elements:
1`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    
    problem25: {
        title: "Problem 25: Merge Arrays",
        difficulty: "Medium",
        category: "Array Operations",
        description: "Merge two sorted arrays into one sorted array.",
        code: `public class Problem25_MergeArrays {
    public static void main(String[] args) {
        int[] a = {1,3,5};
        int[] b = {2,4,6};
        int[] c = new int[a.length + b.length];

        int i = 0, j = 0;

        for (int k = 0; k < c.length; k++) {
            if (i < a.length && (j >= b.length || a[i] < b[j])) {
                c[k] = a[i++];
            } else {
                c[k] = b[j++];
            }
        }

        for (int x : c) System.out.print(x + " ");
    }
}`,
        output: `1 2 3 4 5 6`,
        timeComplexity: "O(m+n)",
        spaceComplexity: "O(m+n)"
    },
    
    problem26: {
        title: "Problem 26: Reverse Array",
        difficulty: "Easy",
        category: "Array Operations",
        description: "Reverse the elements of an array.",
        code: `public class Problem26_ReverseArray {
    public static void main(String[] args) {
        int [] arr = {0,1,2,3,4,9,8,7};
        int temp = 0;
        for(int i=0;i<arr.length/2;i++){
            temp = arr[i];
            arr[i] = arr[arr.length-1-i];
            arr[arr.length-1-i] = temp;
        }
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");
        }
    }
}`,
        output: `7 8 9 4 3 2 1 0`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    
    problem27: {
        title: "Problem 27: Average of Array",
        difficulty: "Easy",
        category: "Array Operations", 
        description: "Calculate the average of elements in an array.",
        code: `import java.util.Scanner;

public class Problem27_AverageOfArray {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter The Number of Elements: ");
        int n=sc.nextInt();
        int sum =0;
        int arr [] = new int[n];
         for (int i=0;i<arr.length;i++){
            System.out.println("Enter Number: ");
            arr[i]=sc.nextInt();
            sum+=arr[i];
         }
    System.out.println("Sum Of Array is ="+sum);
    System.out.println("Average Of Array is ="+sum / arr.length);
    }
}`,
        output: `Enter The Number of Elements: 
5
Enter Number: 
10
Enter Number: 
20
Enter Number: 
30
Enter Number: 
40
Enter Number: 
50
Sum Of Array is =150
Average Of Array is =30`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    
    problem28: {
        title: "Problem 28: Min Max in Array",
        difficulty: "Easy",
        category: "Array Operations",
        description: "Find the minimum and maximum elements in an array.",
        code: `public class Problem28_MinMaxArray {
    public static void main(String[] args) {
        int [] arr = {0,1,2,3,4,9,8,7};
        int maxValue=arr[0],minValue=arr[0];

        for (int i =0;i<arr.length;i++){
            if (arr[i]>maxValue){
                maxValue=arr[i];
            }
            if (arr[i]<minValue){
                minValue=arr[i];
            }
        }
        System.out.println("Maximum: " + maxValue);
        System.out.println("Minimum: " + minValue);
    }
}`,
        output: `Maximum: 9
Minimum: 0`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    
    problem29: {
        title: "Problem 29: Second Largest",
        difficulty: "Medium",
        category: "Array Operations",
        description: "Find the second largest element in an array.",
        code: `public class Problem29_SecondLargest {
    public static void main(String[] args) {
        int [] arr={1,2,3,4,5,6,7};
        int largest = Integer.MIN_VALUE, secondLargest = Integer.MIN_VALUE;
        
        for(int i=0;i<arr.length;i++){
            if(arr[i] > largest){
                secondLargest = largest;
                largest = arr[i];
            }
            else if(arr[i] > secondLargest && arr[i] != largest){
                secondLargest = arr[i];
            }
        }
        System.out.println("Largest: " + largest);
        System.out.println("Second Largest: " + secondLargest);
    }
}`,
        output: `Largest: 7
Second Largest: 6`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    
    problem30: {
        title: "Problem 30: Remove Duplicates",
        difficulty: "Medium",
        category: "Array Operations",
        description: "Remove duplicate elements from an array.",
        code: `public class Problem30_RemoveDuplicates {
    public static void main(String[] args) {
        int[] arr = {0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 9, 5, 8, 7, 6};
        int n = arr.length;

        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (arr[i] == arr[j]) {
                    for (int k = j; k < n - 1; k++) {
                        arr[k] = arr[k + 1];
                    }
                    n--;   
                    j--;   
                }
            }
        }

        System.out.print("Array after removing duplicates: ");
        for (int i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}`,
        output: `Array after removing duplicates: 0 1 2 3 4 5 9 8 7 6`,
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)"
    },
    
    problem31: {
        title: "Problem 31: Is Array Sorted",
        difficulty: "Easy",
        category: "Array Operations",
        description: "Check if an array is sorted in ascending order.",
        code: `public class Problem31_IsArraySorted {
    void isArraySorted(int [] a){
        for(int i=0;i<a.length-1;i++){
            if(a[i]>a[i+1]){
                System.out.println("Array is not sorted");
                return;
            }
        }
        System.out.println("Array is sorted");
    }
    public static void main(String[] args) {
        int [] a = {0,1,2,3,4,5,6,7,8,9};
        Problem31_IsArraySorted checker = new Problem31_IsArraySorted();
        checker.isArraySorted(a);
    }
}`,
        output: `Array is sorted`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    
    problem32: {
        title: "Problem 32: Common Elements",
        difficulty: "Medium",
        category: "Array Operations",
        description: "Find common elements between two arrays.",
        code: `public class Problem32_CommonElements {
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4, 5};
        int[] arr2 = {3, 4, 5, 6, 7};
        
        System.out.print("Common elements: ");
        for (int i = 0; i < arr1.length; i++) {
            for (int j = 0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j]) {
                    System.out.print(arr1[i] + " ");
                    break;
                }
            }
        }
    }
}`,
        output: `Common elements: 3 4 5`,
        timeComplexity: "O(m*n)",
        spaceComplexity: "O(1)"
    },
    
    problem33: {
        title: "Problem 33: Array Intersection",
        difficulty: "Medium",
        category: "Array Operations",
        description: "Find intersection of two arrays without duplicates.",
        code: `public class Problem33_ArrayIntersection {
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4, 5, 1, 1, 1, 1, 1};
        int[] arr2 = {3, 4, 5, 6, 7, 1, 1, 1};

        int[] arr3 = new int[Math.min(arr1.length, arr2.length)];
        int k = 0;

        for (int i = 0; i < arr1.length; i++) {
            for (int j = 0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j]) {
                    boolean alreadyAdded = false;
                    for (int m = 0; m < k; m++) {
                        if (arr3[m] == arr1[i]) {
                            alreadyAdded = true;
                            break;
                        }
                    }
                    if (!alreadyAdded) {
                        arr3[k] = arr1[i];
                        k++;
                    }
                    break;
                }
            }
        }
        System.out.print("Intersection: ");
        for (int i = 0; i < k; i++) {
            System.out.print(arr3[i] + " ");
        }
    }
}`,
        output: `Intersection: 1 3 4 5`,
        timeComplexity: "O(m*n*k)",
        spaceComplexity: "O(min(m,n))"
    },
    
    problem34: {
        title: "Problem 34: Shift Array",
        difficulty: "Easy",
        category: "Array Operations",
        description: "Shift array elements to the right by one position.",
        code: `public class Problem34_ShiftArray {
    public static void main(String[] args) {
        int [] arr = {1, 2, 3, 4, 5};
        int n = arr.length;
        int[] shiftedArr = new int[n];
        shiftedArr[0] = arr[n-1];
        for (int i=1;i<n;i++){
            shiftedArr[i] = arr[i-1];
        }
        
        System.out.print("Shifted array: ");
        for (int i=0;i<n;i++){
            System.out.print(shiftedArr[i]+" ");
        }
    }
}`,
        output: `Shifted array: 5 1 2 3 4`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },
    
    problem35: {
        title: "Problem 35: Shift Array by Key",
        difficulty: "Medium",
        category: "Array Operations",
        description: "Shift array elements to the right by k positions.",
        code: `public class Problem35_ShiftArrayByKey {
    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        int key = 3;
        int n = arr.length;

        for (int i = 0; i < key; i++) {
            int last = arr[n - 1];
            for (int j = n - 1; j > 0; j--) {
                arr[j] = arr[j - 1];
            }
            arr[0] = last;
        }
        
        System.out.print("Array after shifting by " + key + " positions: ");
        for (int i=0;i<n;i++){
            System.out.print(arr[i]+" ");
        }
    }
}`,
        output: `Array after shifting by 3 positions: 7 8 9 1 2 3 4 5 6`,
        timeComplexity: "O(k*n)",
        spaceComplexity: "O(1)"
    },
    
    problem36: {
        title: "Problem 36: Sum of Array Pairs",
        difficulty: "Medium",
        category: "Array Operations",
        description: "Count pairs in array that sum to a given value k.",
        code: `public class Problem36_SumOfArray {
    public static void main(String[] args) {
        int [] arr = {1, 5, 7, 1, 3, 3, 6, 0} ;
        int k = 6;
        int count = 0;
        for (int i=0;i<arr.length;i++){
            for(int j=i+1;j<arr.length;j++){
                int sum = arr[i] + arr[j];
                if (sum == k){
                    System.out.println("Pair: " + arr[i] + " + " + arr[j] + " = " + k);
                    count++;
                }
            }
        }
        System.out.println("Total pairs with sum " + k + ": " + count);
    }
}`,
        output: `Pair: 1 + 5 = 6
Pair: 3 + 3 = 6
Pair: 6 + 0 = 6
Total pairs with sum 6: 3`,
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)"
    },
    
    problem37: {
        title: "Problem 37: Reverse Array Elements",
        difficulty: "Medium",
        category: "Array Operations",
        description: "Reverse array elements using bubble sort technique.",
        code: `public class Problem37_ReverseArrayElements {
    public static void main(String[] args) {
        int [] arr = {1,2,3,4,5,6,7,8,9,10};

        for (int i = arr.length-1; i >= 0; i--) {
            for (int j = 0; j < i; j++) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }

        System.out.print("Reversed array: ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]+" ");
        }
    }
}`,
        output: `Reversed array: 10 9 8 7 6 5 4 3 2 1`,
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)"
    },
    
    problem38: {
        title: "Problem 38: Array Decrease Check",
        difficulty: "Hard",
        category: "Array Operations",
        description: "Check if array can be made non-decreasing by modifying at most one element.",
        code: `public class Problem38_ArrayDecreaseCheck {
    public static boolean checkPossibility(int[] nums) {
        int count = 0; 

        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) { 
                count++;
                if (count > 1) return false; 

                if (i > 0 && nums[i - 1] > nums[i + 1]) {
                    nums[i + 1] = nums[i];  
                } else {
                    nums[i] = nums[i + 1];
                }
            }
        }
        return true;
    }

    public static void main(String[] args) {
        int[] nums = {1,2,3};
        System.out.println("Can be made non-decreasing: " + checkPossibility(nums)); 
    }
}`,
        output: `Can be made non-decreasing: true`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    
    problem39: {
        title: "Problem 39: Array Sort Check (Recursive)",
        difficulty: "Medium",
        category: "Array Operations",
        description: "Check if array is sorted using recursive approach.",
        code: `public class Problem39_ArraySortCheck {
    static boolean isSort(int i, int j, int[] arr) {
        if (i >= j)
            return true;

        if (arr[i] > arr[i + 1])
            return false;

        return isSort(i + 1, j, arr);
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};

        if (isSort(0, arr.length - 1, arr))
            System.out.println("Array is sorted");
        else
            System.out.println("Array is not sorted");
    }
}`,
        output: `Array is sorted`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },
    
    problem40: {
        title: "Problem 40: Find Single Duplicate",
        difficulty: "Easy",
        category: "Array Operations",
        description: "Find and print all duplicate elements in an array.",
        code: `public class Problem40_FindSingleDuplicate {
    public static void main(String[] args) {
        int[] arr = {1,1,2,3,3,4};

        System.out.print("Duplicate elements: ");
        for (int i = 0; i < arr.length; i++){
            for (int j = i+1; j < arr.length; j++){
                if (arr[i] == arr[j]){
                    System.out.print(arr[i] + " ");
                    break;
                }
            }
        }
    }
}
    }

    setupEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            // Sidebar toggle functionality
            const sidebarToggle = document.getElementById('sidebarToggle');
            const sidebar = document.getElementById('sidebar');
            
            if (sidebarToggle) {
                sidebarToggle.addEventListener('click', function() {
                    sidebar.classList.toggle('active');
                });
            }
            
            // Close sidebar when clicking outside on mobile
            document.addEventListener('click', function(e) {
                if (window.innerWidth <= 768 && 
                    sidebar && !sidebar.contains(e.target) && 
                    sidebarToggle && !sidebarToggle.contains(e.target)) {
                    sidebar.classList.remove('active');
                }
            });
            
            // Expand all sections by default
            document.querySelectorAll('.category-section').forEach(section => {
                section.classList.add('active');
            });
            
            // Show welcome section by default
            const welcome = document.getElementById('welcome');
            if (welcome) {
                welcome.classList.add('active');
            }
        });
    }

    showProblem(problemId) {
        const problemData = this.problemsData[problemId];
        
        if (problemData) {
            // Hide all content sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Remove active class from all problem items
            document.querySelectorAll('.problem-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked problem
            const problemElement = document.querySelector(`[onclick="problemManager.showProblem('${problemId}')"]`);
            if (problemElement) {
                problemElement.classList.add('active');
            }
            
            // Populate problem template with data
            const elements = {
                'problemTitle': problemData.title,
                'problemDifficulty': problemData.difficulty,
                'problemCategory': problemData.category,
                'problemDesc': problemData.description,
                'problemCode': problemData.code,
                'problemOutput': problemData.output,
                'timeComplexity': problemData.timeComplexity,
                'spaceComplexity': problemData.spaceComplexity
            };
            
            Object.keys(elements).forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.textContent = elements[id];
                }
            });
            
            // Show problem template
            const problemTemplate = document.getElementById('problemTemplate');
            if (problemTemplate) {
                problemTemplate.classList.add('active');
            }
            
            // Re-highlight code
            if (typeof Prism !== 'undefined') {
                Prism.highlightAll();
            }
            
            // Close sidebar on mobile after selection
            if (window.innerWidth <= 768) {
                const sidebar = document.getElementById('sidebar');
                if (sidebar) {
                    sidebar.classList.remove('active');
                }
            }
            
            // Scroll to top of content
            const mainContent = document.getElementById('mainContent');
            if (mainContent) {
                mainContent.scrollTop = 0;
            }
        }
    }

    showWelcome() {
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        document.querySelectorAll('.problem-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const welcome = document.getElementById('welcome');
        if (welcome) {
            welcome.classList.add('active');
        }
    }

    toggleCategory(categoryElement) {
        categoryElement.classList.toggle('active');
    }

    searchProblems() {
        const searchBox = document.getElementById('search-box');
        if (!searchBox) return;
        
        const searchTerm = searchBox.value.toLowerCase();
        const problemItems = document.querySelectorAll('.problem-item');

        problemItems.forEach(item => {
            const problemText = item.textContent.toLowerCase();
            if (problemText.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    copyCode() {
        const codeElement = document.getElementById('problemCode');
        if (codeElement && navigator.clipboard) {
            navigator.clipboard.writeText(codeElement.textContent).then(() => {
                // Visual feedback
                const copyBtn = document.querySelector('.copy-btn');
                if (copyBtn) {
                    const originalHtml = copyBtn.innerHTML;
                    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    copyBtn.style.background = '#28a745';
                    
                    setTimeout(() => {
                        copyBtn.innerHTML = originalHtml;
                        copyBtn.style.background = '';
                    }, 2000);
                }
            }).catch(err => {
                console.error('Copy failed:', err);
                alert('Failed to copy code to clipboard');
            });
        }
    }
}


// Create global instance
const problemManager = new ProblemManager();

// Global functions for HTML onclick events
function showProblem(problemId) {
    problemManager.showProblem(problemId);
}

function showWelcome() {
    problemManager.showWelcome();
}

function toggleCategory(element) {
    problemManager.toggleCategory(element);
}

function searchProblems() {
    problemManager.searchProblems();
}

function copyCode() {
    problemManager.copyCode();
}

// Additional event listeners
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.remove('active');
        }
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && window.innerWidth <= 768) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.remove('active');
        }
    }
    
    // Ctrl+F to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        const searchBox = document.getElementById('search-box');
        if (searchBox) {
            searchBox.focus();
        }
    }
});

console.log('Java Programming Problems Documentation System Loaded Successfully!');