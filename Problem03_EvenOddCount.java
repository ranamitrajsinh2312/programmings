public class Problem03_EvenOddCount {
    public static void main(String[] args) {
        int [] arr = {1,2,3,4,5,6,7};
        int countEven=0,countOdd=0;
        for (int i =0; i <arr.length;i++){
            if (arr[i]%2==0){
                countEven++;
            }
            else{
                countOdd++;
            }
        }
        System.out.println("Even Count :"+countEven);
        System.out.println("Odd Count :"+countOdd);
    }
}
