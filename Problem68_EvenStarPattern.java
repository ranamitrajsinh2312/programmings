public class Problem68_EvenStarPattern {
    public static void main(String[] args) {
        /*
        1
        1*1
        1*3*1
        1*3*3*1
        1*3*5*3*1
        1*3*5*5*3*1
        1*3*5*7*5*3*1
        */
        int i, j, num;
        for (i = 1; i <= 7; i++) {
            num = 1;
            for (j = 1; j <= 2 * i - 1; j++) {
                if (j < i) {
                    if (j % 2 != 0) {
                        System.out.print(num);
                    } else {
                        System.out.print(" * ");
                    }
                    num++;
                } else {
                    if (j % 2 != 0) {
                        System.out.print(num);
                    } else {
                        System.out.print(" * ");
                    }
                    num--;
                }
                 
            }
           System.out.println();
        }

    }
}


