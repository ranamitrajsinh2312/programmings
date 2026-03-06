public class Problem69_ReversePattern {
    public static void main(String[] args) {


        /*
          1 2 3 4 5
          10 9 8 7 6
          11 12 13 14 15
          20 19 18 17 16
                 */
        int n=5,num=1;
 
        for(int i=1;i<=4;i++){
            if(i%2!=0){
                for(int j=1;j<=n;j++){
                    System.out.print(num+" ");
                    num++;
                }
            }else{
                int temp=num+n-1;
                for(int j=1;j<=n;j++){
                    System.out.print(temp+" ");
                    temp--;
                    num++;
                }
            }
            System.out.println();
        }
 }
}
