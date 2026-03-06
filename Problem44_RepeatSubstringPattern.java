import java.util.Scanner;

public class Problem44_RepeatSubstringPattern {

    public static boolean repeatedSubstring(String str) {
        int n = str.length();

        for (int len = 1; len <= n / 2; len++) {

            if (n % len != 0) continue;

            boolean match = true;

            for (int i = len; i < n; i++) {
                if (str.charAt(i) != str.charAt(i % len)) {
                    match = false;
                    break;
                }
            }

            if (match) return true;
        }

        return false;
    }

    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      String str = sc.nextLine();
      System.out.println(repeatedSubstring(str));
      
    }
}
