public class Problem78_DemoProgram {
    public static void main(String[] args) {
        int n=20,num=1,sn=1,count=1,digit=1;
        while (n>count*digit) {
            n=n-count*digit;//11
            count=count*10;//90
            digit++;//2
            num=num*10;//10
        }
        sn=num+(n-1)/digit;//10+(11-1)/2=155
        String s=Integer.toString(sn);//"15"
        char c=s.charAt((n-1)%digit);//(11-1)%2=1
        System.out.println(c);//1
    }
}
