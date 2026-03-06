public class Problem67_DiamondPattern1to1 {
    public static void main(String[] args) {
        /*
              1
             212
            32123
           4321234
        */
     for(int i=1;i<=5;i++){
         for(int j=5;j>i;j--){
             System.out.print(" ");
         }
         for(int k=1;k<=(2*i-1);k++){
                if(k<=i){
                    System.out.print(i - k + 1);
                }else{
                    System.out.print(k - i + 1);
                }
         }
         System.out.println();
     }
     for(int i=4;i>=1;i--){
         for(int j=5;j>i;j--){
             System.out.print(" ");
         }
         for(int k=1;k<=(2*i-1);k++){
            if(k<=i){
                System.out.print(i - k + 1);
            }else{
                System.out.print(k - i + 1);
            }
         }
         System.out.println();
     }
    }
}
