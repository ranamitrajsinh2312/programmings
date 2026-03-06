// Extended problem data - Additional problems
const extendedProblemsData = {
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
        description: "Check if a number is an Armstrong number. An Armstrong number is equal to the sum of cubes of its digits.",
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
        
        // Sort the array for binary search
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
64 34 25 12 22
Sorted array: 12 22 25 34 64 
Enter element to search: 25
Element 25 found at position 3`,
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)"
    },
    
    problem23: {
        title: "Problem 23: Selection Sort",
        difficulty: "Medium",
        category: "Array Operations",
        description: "Sort an array using selection sort algorithm. Find the minimum element and swap it with the first element.",
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
        System.out.print("Enter the number  : ");
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
        output: `Enter the number  : 5
Enter 5 elements:
64 34 25 12 22
Sorted Array is:
12 22 25 34 64`,
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)"
    },
    
    problem62: {
        title: "Problem 62: Diamond Pattern",
        difficulty: "Medium",
        category: "Pattern Programs",
        description: "Print a diamond pattern using stars.",
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

// Merge extended data with main problems data
Object.assign(problemsData, extendedProblemsData);