public class Problem16_PronicNumber {
    //num is pronic or not..
    public static void main(String[] args) {
        int num=20;
        boolean isPronic=false;
        for(int i=0;i<=num;i++){
            if(i*(i+1)==num){
                isPronic=true;
                break;
            }
        }
        if(isPronic){
            System.out.println(num+" is pronic number");
        }
        else{
            System.out.println(num+" is not pronic number");
        }
    }
}
