import java.util.*;

public class Problem74_WeaponSystem {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(); 
        sc.nextLine();

        int[][] pick = new int[n][10]; 
        int[] weaponCount = new int[10];

        // Read player picks and count weapons
        for (int p = 0; p < n; p++) {
            String s = sc.nextLine();
            for (int w = 0; w < 10; w++) {
                pick[p][w] = (s.charAt(w) == '1' ? 1 : 0);
                if (pick[p][w] == 1) weaponCount[w]++;
            }
        }

        // Compute unique picks only
        int[] xor = new int[n];
        int[] cnt = new int[n];

        System.out.println("\n--- Player Results ---");

        for (int p = 0; p < n; p++) {
            for (int w = 0; w < 10; w++) {

                if (pick[p][w] == 1 && weaponCount[w] == 1) {
                    xor[p] ^= w;    // only unique weapon
                    cnt[p]++;       // count only unique
                }
            }

            System.out.println("Player " + (p+1) +
                    " -> Unique Weapons = " + cnt[p] +
                    ", XOR = " + xor[p]);
        }

        // Count weapons left at last
        int left = 0;
        for (int w = 0; w < 10; w++)
            if (weaponCount[w] == 1)
                left++;

        System.out.println("\nWeapons left after removing duplicates = " + left);

        // Determine winner
        int winner = 0;
        for (int i = 1; i < n; i++) {
            if (cnt[i] > cnt[winner])
                winner = i;
            else if (cnt[i] == cnt[winner] && xor[i] > xor[winner])
                winner = i;
        }

        System.out.println("Winner = Player " + (winner + 1));

        // Winner gets ALL unique weapons
        System.out.print("Winner takes weapons: ");
        for (int w = 0; w < 10; w++) {
            if (weaponCount[w] == 1)
                System.out.print(w + " ");
        }
        System.out.println();
    }
}
