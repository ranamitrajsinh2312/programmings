public class Problem47_DecimalToBinaryFraction {
    public static void main(String[] args) {
        String bin = "101.110";
        int fracpow = -1;
        int intpow=0;
        String[] parts = bin.split("\\.");
        int integerPart = Integer.parseInt(parts[0]);
        int fractionalPart = Integer.parseInt(parts[1]);

        System.out.println( integerPart+"."+fractionalPart);
       
        int intDecimal = 0;
        for (int i = parts[0].length() - 1; i >= 0; i--) {
            char bit = parts[0].charAt(i);
            if (bit == '1') {
                intDecimal += Math.pow(2, intpow);
            }
            intpow++;
        }

        double fracDecimal = 0.0;
        for (int i = 0; i < parts[1].length(); i++) {
            char bit = parts[1].charAt(i);
            if (bit == '1') {
                fracDecimal += Math.pow(2, fracpow);
            }
            fracpow--;
        }

        System.out.println("Decimal: " + (intDecimal + fracDecimal));
    }
}
