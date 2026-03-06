public class Problem45_StringMultiplication {
    public static void main(String[] args) {
        String s = "a2b3cd4";
        String newStr = "";
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (Character.isDigit(ch)) {
                int count = Character.getNumericValue(ch);
                char prv = s.charAt(i - 1);
                for (int j = 0; j < count - 1; j++) {
                    newStr += prv;
                }
            } else {
                newStr += ch;
            }

        }
        System.err.println(newStr);
    }
}
