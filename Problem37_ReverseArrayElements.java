public class Problem37_ReverseArrayElements {
public static void main(String[] args) {
    int [] arr = {1,2,3,4,5,6,7,8,9,10};

    for (int i = arr.length-1; i >= 0; i--) {
        for (int j = 0; j < i; j++) {
            int temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }

    for (int i = 0; i < arr.length; i++) {
        System.out.print(arr[i]+" ");
    }
}
}