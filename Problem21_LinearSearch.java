import java.util.Scanner;

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
}