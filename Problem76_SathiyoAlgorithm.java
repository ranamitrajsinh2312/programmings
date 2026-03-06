public class Problem76_SathiyoAlgorithm {
    public static void main(String[] args) {
        int row = 19;

        for (int i = 1; i <= row; i++) {
            for (int j = 1; j <= row; j++) {
                if (j == row / 2 + 1 || i == row / 2 + 1
                        || (i == 1 && j > row / 2)
                        || (i == row && j <= row / 2)
                        || (j == row && i > row / 2)
                        || (j == 1 && i <= row / 2)) {

                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }
}
