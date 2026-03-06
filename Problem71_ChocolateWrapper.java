import java.util.Scanner;

public class Problem71_ChocolateWrapper {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter  :");
        int n = sc.nextInt();
        int m =n;
        int k =3;
        int totalChocolate = n/m;
        int totalWrapper = totalChocolate;
        
        while (totalChocolate>=k) {
            int extraChoco = totalChocolate/k;
            totalChocolate += extraChoco;
            totalWrapper = totalWrapper % k +(extraChoco);
        }
        System.err.println(totalChocolate);
        
    }
}
