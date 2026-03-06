public class Problem36_SumOfArray {
    public static void main(String[] args) {
        //pairs with sum k
        int [] arr = {1, 5, 7, 1,3,3,6,0} ;
        int k = 6;
        int count = 0;
        for (int i=0;i<arr.length;i++){
            int sum = 0;
            for(int j=i+1;j<arr.length;j++){
                sum = arr[i] + arr[j];
                if (sum == k){
                    count++;
                }
            }

        }
        System.err.println(count);
    }
}
