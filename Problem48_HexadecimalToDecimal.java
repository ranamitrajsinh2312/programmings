




import java.util.Scanner;

public class Problem48_HexadecimalToDecimal {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter hexadecimal number: ");
        String hex = sc.nextLine().toUpperCase(); 


        int decimal = 0;
        int base = 1;
        //rtol
        for (int i = hex.length() - 1; i >= 0; i--) {
            char ch = hex.charAt(i);

            int value;
            if (ch >= '0' && ch <= '9')
                value = ch - '0';
            else if (ch >= 'A' && ch <= 'F')
                value = ch - 'A' + 10;
            else {
                System.out.println("Invalid Hex Digit: " + ch);
                return;
            }

            decimal += value * base;
            base *= 16;
        }

        System.out.println("Decimal value: " + decimal);
        
     

        String hexx = "";

        // Decimal to Hexadecimal conversion
        while (decimal != 0) {
            int rem = decimal % 16;
            char hexChar;

            if (rem < 10) {
                hexChar = (char) ('0' + rem);  // 0–9
            } else {
                hexChar = (char) ('A' + (rem - 10));  // A–F
            }

            hexx = hexChar + hexx;  
            decimal /= 16;
        }

        System.out.println("Hexadecimal: " + hexx);
    }

    }

