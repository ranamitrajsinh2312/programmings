import java.util.*;

public class Problem73_OptimalAttack {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int health = sc.nextInt();   // total health
        int gun = sc.nextInt();      // gun damage
        int las1 = sc.nextInt();     // laser high damage
        int las2 = sc.nextInt();     // laser low damage
        int k = sc.nextInt();        // number of las2 hits

        // --- Gun calculation ---
        int gunHits = (int)Math.ceil(health * 1.0 / gun);

        // --- Laser calculation ---
        int h = health;
        int laserHits = 0;

        while (h > 0) {
            laserHits++;
            if (laserHits <= k)
                h -= las2;
            else
                h -= las1;
        }

        // --- Print the optimal (minimum) hits ---
       int opt= Math.min(gunHits, laserHits);
        System.out.println();
    }
}
