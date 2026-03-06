// Complete problem data with all Java programs
const allProblemsData = {
    // Basic Programming Problems (01-20)
    problem01: {
        title: "Problem 01: Prime Number Check",
        difficulty: "Easy",
        category: "Basic Programming",
        description: "Check whether a given number is prime or not. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.",
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
        title: "Problem 02: Factorial Calculation",
        difficulty: "Easy", 
        category: "Basic Programming",
        description: "Calculate factorial of a number using iterative approach. Factorial of n (n!) is the product of all positive integers less than or equal to n.",
        code: `import java.util.Scanner;

public class Problem02_Factorial {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = 5; // Example input
        int fact = 1;
        for (int i = 1; i <= num; i++) {
            fact = fact * i;
        }
        System.out.println("Factorial of " + num + " is: " + fact);
        sc.close();
    }
}`,
        output: `Factorial of 5 is: 120`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },

    problem03: {
        title: "Problem 03: Even/Odd Count in Array",
        difficulty: "Easy",
        category: "Basic Programming", 
        description: "Count the number of even and odd numbers in a given array.",
        code: `public class Problem03_EvenOddCount {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        int countEven = 0, countOdd = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                countEven++;
            } else {
                countOdd++;
            }
        }
        System.out.println("Even Count: " + countEven);
        System.out.println("Odd Count: " + countOdd);
    }
}`,
        output: `Even Count: 3
Odd Count: 4`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },

    problem04: {
        title: "Problem 04: Even/Odd Number Checker",
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
        title: "Problem 05: Palindrome Number Check",
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
        int n = 8; // Example
        
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
        title: "Problem 07: Armstrong Number Check", 
        difficulty: "Medium",
        category: "Basic Programming",
        description: "Check if a number is an Armstrong number. An Armstrong number is equal to the sum of cubes of its digits.",
        code: `import java.util.Scanner;

public class Problem07_ArmstrongNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = 153; // Example
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

    // Array Operations (21-40)
    problem21: {
        title: "Problem 21: Linear Search Algorithm",
        difficulty: "Easy", 
        category: "Array Operations",
        description: "Search for an element in an array using linear search algorithm. Check each element sequentially until found.",
        code: `import java.util.Scanner;

public class Problem21_LinearSearch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int[] arr = {10, 20, 30, 40, 50}; // Example array
        int searchElement = 30; // Example search
        
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
        output: `Element 30 found at position 3`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },

    problem22: {
        title: "Problem 22: Binary Search Algorithm",
        difficulty: "Medium",
        category: "Array Operations", 
        description: "Search for an element in a sorted array using binary search algorithm. Divide and conquer approach.",
        code: `import java.util.Arrays;

public class Problem22_BinarySearch {
    public static void main(String[] args) {
        int[] arr = {12, 22, 25, 34, 64}; // Sorted array
        int searchElement = 25;
        
        int position = binarySearch(arr, searchElement);
        
        if (position != -1) {
            System.out.println("Element " + searchElement + " found at position " + (position + 1));
        } else {
            System.out.println("Element " + searchElement + " not found");
        }
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
        output: `Element 25 found at position 3`,
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)"
    },

    problem23: {
        title: "Problem 23: Selection Sort Algorithm",
        difficulty: "Medium",
        category: "Array Operations",
        description: "Sort an array using selection sort algorithm. Find the minimum element and place it at the beginning.",
        code: `public class Problem23_SelectionSort {
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
        int[] arr = {64, 34, 25, 12, 22};
        
        System.out.print("Original array: ");
        for (int num : arr) System.out.print(num + " ");
        
        selectionSort(arr);
        
        System.out.print("\\nSorted array: ");
        for (int num : arr) System.out.print(num + " ");
        System.out.println();
    }
}`,
        output: `Original array: 64 34 25 12 22 
Sorted array: 12 22 25 34 64`,
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)"
    },

    // String Operations (41-50)
    problem41: {
        title: "Problem 41: Anagram String Check",
        difficulty: "Medium",
        category: "String Operations",
        description: "Check if two strings are anagrams of each other. Two strings are anagrams if they contain the same characters with the same frequency.",
        code: `import java.util.Arrays;

public class Problem41_AnagramString {
    public static void main(String[] args) {
        String str1 = "listen";
        String str2 = "silent";
        
        // Remove spaces and convert to lowercase
        str1 = str1.replaceAll("\\\\s", "").toLowerCase();
        str2 = str2.replaceAll("\\\\s", "").toLowerCase();
        
        // Check if lengths are same
        if (str1.length() != str2.length()) {
            System.out.println("Strings are NOT anagrams.");
        } else {
            // Convert strings to char array and sort
            char[] arr1 = str1.toCharArray();
            char[] arr2 = str2.toCharArray();
            
            Arrays.sort(arr1);
            Arrays.sort(arr2);
            
            // Compare sorted arrays
            if (Arrays.equals(arr1, arr2)) {
                System.out.println("Strings are Anagrams!");
            } else {
                System.out.println("Strings are NOT anagrams.");
            }
        }
    }
}`,
        output: `Strings are Anagrams!`,
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(n)"
    },

    // Pattern Programs (61-70)
    problem61: {
        title: "Problem 61: Square Pattern",
        difficulty: "Easy",
        category: "Pattern Programs",
        description: "Print a square pattern using stars. Display a square of stars with specified dimensions.",
        code: `public class Problem61_SquarePattern {
    public static void main(String[] args) {
        int n = 5;
        
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`,
        output: `* * * * * 
* * * * * 
* * * * * 
* * * * * 
* * * * *`,
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)"
    },

    problem62: {
        title: "Problem 62: Diamond Pattern",
        difficulty: "Medium", 
        category: "Pattern Programs",
        description: "Print a diamond pattern using stars. Create both upper and lower triangular parts.",
        code: `public class Problem62_DiamondPattern {
    public static void main(String[] args) {
        int n = 5;
        
        // Upper half of diamond
        for (int i = 1; i <= n; i++) {
            // Print spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            // Print stars
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        
        // Lower half of diamond
        for (int i = n - 1; i >= 1; i--) {
            // Print spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            // Print stars
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`,
        output: `    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *`,
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)"
    }
};

// Replace the original problemsData with the complete data
const problemsData = allProblemsData;