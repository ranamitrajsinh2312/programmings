public class Problem49_RecursivePower {
   
    static int power(int x, int y) {
        if (y == 0)
            return 1;

        return x * power(x, y - 1);
    }

    public static void main(String[] args) {
        int x = 2, y = 5;
        System.out.println(x + "^" + y + " = " + power(x, y));
    }

}
