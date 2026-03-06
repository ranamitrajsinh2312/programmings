public class Problem28_MinMaxArray {
    public static void main(String[] args) {
        int [] arr = {0,1,2,3,4,9,8,7};
        int maxValue=0,minValue=0;

        for (int i =0;i<arr.length;i++){
            if (arr[i]>maxValue){
                maxValue=arr[i];
  
            }
            if (arr[i]<minValue){
                minValue=arr[i];

            }
        }
        System.out.println(maxValue);
        System.out.println(minValue);
    }
}
