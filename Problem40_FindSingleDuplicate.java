public class Problem40_FindSingleDuplicate {
  
    public static void main(String[] args) {
        int[] arra = {1,1,2,3,3,4};

//find Duplicates 

        for (int i =0;i<arra.length;i++){
            for (int j = i+1;j<arra.length;j++){
                if (arra[i]==arra[j]){
                   System.out.println(arra[i]);
                }
            }
            // if (arra[i]!=0){
            //     System.out.println(arra[i]);
            // }
        }
    }
}

