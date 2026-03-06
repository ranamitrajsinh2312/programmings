public class Problem20_DecimalToOctal {
    public static void main(String[] args) {
        // dec to oct
        int decimal = 10;
        int octal = 0;
        int i = 1;
        while (decimal != 0) {
            octal += (decimal % 8) * i;
            decimal /= 8;
            i *= 10;
        }
        System.out.println("Octal: " + octal);

        // oct to dec
        int oct = 12;
        int dec = 0;
        int j = 0;
        while (oct != 0) {
            dec += (oct % 10) * Math.pow(8, j);
            oct /= 10;
            j++;
        }
        System.out.println("Decimal: " + dec);
    }
}
