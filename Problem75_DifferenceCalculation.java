public class Problem75_DifferenceCalculation {
   public static void main(String[] args) {
        int [] arrr={1,2,3,4,5,6,7};
        int largest=Integer.MAX_VALUE,slargest=Integer.MAX_VALUE;
        int smallest = 0,ssmallest=0;
        int n=arrr.length;
        for(int i=0;i<arrr.length;i++){
            if(arrr[i]>smallest){
                ssmallest=smallest;
                smallest=arrr[i];
            }
            else if(arrr[i]>ssmallest && arrr[i]!=smallest){
                ssmallest=arrr[i];
            }
        }
        for(int i=0;i<arrr.length;i++){
            if(arrr[i]<largest){
                slargest=largest;
                largest=arrr[i];
            }
            else if(arrr[i]<slargest && arrr[i]!=largest){
                slargest=arrr[i];
            }
        }
       
        System.out.println(ssmallest);
        System.out.println(slargest);
        System.err.println(ssmallest-slargest);
    }
}
