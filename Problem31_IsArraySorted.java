// **Check if array is sorted**
public class Problem31_IsArraySorted {
    void isArraySorted(int [] a){
        for(int i=0;i<a.length-1;i++){
            if(a[i]>a[i+1]){
                System.out.println("Array is not sorted");
                return;
            }
        }
        System.out.println("Array is sorted");
    }
    public static void main(String[] args) {
        int [] a = {0,1,2,3,4,5,6,7,8,9};
        IsArraySorted i = new IsArraySorted();
        i.isArraySorted(a);
    }
}
