public class Problem46_PalindromeRecursive {
    static boolean palindrome(int i, int j, String s) {
        if (i >= j)
            return true;

        if (s.charAt(i) != s.charAt(j))
            return false;

        return palindrome(i + 1, j - 1, s);
    }

    public static void main(String[] args) {
        String str = "madam";
        if (palindrome(0, str.length() - 1, str))
            System.out.println(str + "  palindrome");
        else
            System.out.println(str + "  not palindrome");
    }
}
