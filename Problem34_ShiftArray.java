public class Problem34_ShiftArray {
    public static void main(String[] args) {
        //shift array to Right by one position
        int [] arr = {1, 2, 3, 4, 5};
        int n = arr.length;
        int[] shiftedArr = new int[n];
        shiftedArr[0] = arr[n-1];
        for (int i=1;i<n;i++){
            shiftedArr[i] = arr[i-1];
        }
        
       for (int i=0;i<n;i++){
          System.out.print(shiftedArr[i]+" ");
         }
        
    }
  
}
