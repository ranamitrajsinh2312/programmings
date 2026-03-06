import java.util.Scanner;

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
}
