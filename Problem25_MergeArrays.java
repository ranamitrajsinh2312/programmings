public class Problem25_MergeArrays {
    public static void main(String[] args) {

        int[] a = {1,3,5};
        int[] b = {2,4,6};
        int[] c = new int[a.length + b.length];

        int i = 0, j = 0;

        for (int k = 0; k < c.length; k++) {
            if (i < a.length && (j >= b.length || a[i] < b[j])) {
                c[k] = a[i++];
            } else {
                c[k] = b[j++];
            }
        }

        for (int x : c) System.out.print(x + " ");
    }
}
