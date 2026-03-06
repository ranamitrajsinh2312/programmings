import java.util.Scanner;

public class Problem18_UglyNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("ENter N");
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
       System.err.println(isUgly ? "Ugly Number" : "Not an Ugly Number");
    }
}
