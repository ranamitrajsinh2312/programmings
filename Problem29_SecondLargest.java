public class Problem29_SecondLargest {
    public static void main(String[] args) {
        int [] arrr={1,2,3,4,5,6,7};
        int largest = 0,slargest=0;
        for(int i=0;i<arrr.length;i++){
            if(arrr[i]<largest){
                slargest=largest;
                largest=arrr[i];
            }
            else if(arrr[i]<slargest && arrr[i]!=largest){
                slargest=arrr[i];
            }
        }
        System.out.println(largest);
        System.out.println(slargest);
    }
}
