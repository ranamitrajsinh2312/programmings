public class Problem80_AbcDAlgorithm {
    public static void main(String[] args) {
        /*
         * Given an integer n, return the least number of perfect square numbers that
         * sum to n.
         * Input: n = 12 Output: 3 Explanation: 12 = 4 + 4 + 4.
         * Input: n = 13 Output: 2 Explanation: 13 = 4 + 9.
         * 
         * 
         * 
         *
         */

        int n = 12;
        System.out.println("The least number of perfect square numbers that sum to " + n + " is " + leastPerfectSquares(n));

    }

    public static int leastPerfectSquares(int n) {
        int[] dp = new int[n + 1];
        dp[0] = 0;
        dp[1] = 1;
        for (int i = 2; i <= n; i++) {
            dp[i] = Integer.MAX_VALUE;
            for (int j = 1; j * j <= i; j++) {
             
                dp[i] = Math.min(dp[i], dp[i - j * j] + 1);

            }
    }
        return dp[n];
    }
}
