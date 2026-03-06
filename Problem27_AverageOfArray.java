import java.util.Scanner;

public class Problem27_AverageOfArray {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter The Number of Elements:  ");
        int n=sc.nextInt();
        int sum =0;
        int arr [] = new int[n];
         for (int i=0;i<arr.length;i++){
            System.out.println("Enter Number:  ");
            arr[i]=sc.nextInt();
            sum+=arr[i];
         }
    System.out.println("Sum Of Array is ="+sum);
    System.out.println("Average  Of Array is ="+sum / arr.length);
    }
    
}
