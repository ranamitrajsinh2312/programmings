import java.util.Scanner;

public class Problem50_InsertDeleteSpecific {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6};
        int n = arr.length;

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the position to insert (0-based index): ");
        int pos = sc.nextInt();
        System.out.println("Enter the element to insert: ");
        int ele = sc.nextInt();
       


        int[] newArr = new int[n + 1];

        for (int i = 0; i < pos; i++) {
            newArr[i] = arr[i];
        }
        newArr[pos] = ele;

        for (int i = pos; i < n; i++) {
            newArr[i + 1] = arr[i];
        }

        System.out.println("Array after insertion:");
        for (int i = 0; i < newArr.length; i++) {
            System.out.print(newArr[i] + " ");
        }
        System.out.println("Enter the element to delete: ");
        int ele2 = sc.nextInt();
        int[] delArr = new int[n - 1];
        int index = 0;
        for (int i = 0; i < n; i++) {
            if (arr[i] != ele2) {
                delArr[index++] = arr[i];
            }
        }
        System.out.println("Array after deletion:");
        for (int i = 0; i < delArr.length; i++) {
            System.out.print(delArr[i] + " ");
        }
    }
}
