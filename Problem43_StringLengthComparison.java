public class Problem43_StringLengthComparison {
    public static void main(String[] args) {
        String s1 = "Hello";
        String s2 = "World";

        //without using length() method
        int len1 = 0;
        for (char c : s1.toCharArray()) {
            len1++;
        }
        int len2 = 0;
        for (char c : s2.toCharArray()) {
            len2++;
        }
        //normal comparison
        if(len1 > len2) {
            System.out.println(s1 + " is longer than " + s2);
        } else if(len1 < len2) {
            System.out.println(s2 + " is longer than " + s1);
        } else {
            System.out.println(s1 + " and " + s2 + " are of equal length");
        }

        //usning ascii values
        int asciiSum1 = 0;
        for (char c : s1.toCharArray()) {
            asciiSum1 += (int) c;
        }
        int asciiSum2 = 0;
        for (char c : s2.toCharArray()) {
            asciiSum2 += (int) c;
        }
        if(asciiSum1 > asciiSum2) {
            System.out.println(s1 + " is greater than " + s2 + " based on ASCII values");
        } else if(asciiSum1 < asciiSum2) {
            System.out.println(s2 + " is greater than " + s1 + " based on ASCII values");
        } else {
            System.out.println(s1 + " and " + s2 + " are equal based on ASCII values");
        }
    }
}
