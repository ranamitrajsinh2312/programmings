public class ReverseArray {
    public static void main(String[] args) {
        // int maxIndex=arr.length-1;
        // for(int i = maxIndex ;i>=0;i--){
        //     System.out.print(arr[i]+"");  
        // }
                int [] arr = {0,1,2,3,4,9,8,7};
                int temp = 0;
                for(int i=0;i<arr.length/2;i++){
                    temp = arr[i];
                    arr[i] = arr[arr.length-1-i];
                    arr[arr.length-1-i] = temp;
                    }
                for(int i=0;i<arr.length;i++){
                    System.out.print(arr[i]+" ");
                }
            }
        } 

