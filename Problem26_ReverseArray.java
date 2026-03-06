import java.util.Scanner;

public class Problem26_ReverseArray {
    public static void main(String[] args) {
       Scanner sc=new Scanner(System.in);
        System.out.println("Enter The Number of Elements:  ");
        int n=sc.nextInt();
       
        int arr [] = new int[n];
        
         for (int i=0;i<arr.length;i++){
            System.out.println("Enter Number:  ");
            arr[i]=sc.nextInt();
         }
        
         for (int i=arr.length ;i<=0;i++){
            System.out.println(arr[i]);
            
         }
    }
}
