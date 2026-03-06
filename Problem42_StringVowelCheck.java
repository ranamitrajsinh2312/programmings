public class Problem42_StringVowelCheck {

    public static void main(String[] args) {
        String s1="ViratKohli";
        String s2=s1.substring(5);
        System.out.println(s2);
       
         for(int i =0;i<s1.length();i++){
            if ( s1.charAt(i)== 'A' ||s1.charAt(i)== 'a' || s1.charAt(i)==  'E' || s1.charAt(i)== 'e' || s1.charAt(i)== 'I'|| s1.charAt(i)== 'i'||s1.charAt(i)== 'O' || s1.charAt(i)== 'o'|| s1.charAt(i)== 'u'||s1.charAt(i)== 'U' ){
                System.out.println(s1.charAt(i)+"= Vovel");
            }
            else{
                System.err.println(s1.charAt(i)+"= Consonant");
            }
         }






    }
}