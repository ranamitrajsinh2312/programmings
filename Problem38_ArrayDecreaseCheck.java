public class Problem38_ArrayDecreaseCheck {
    public static boolean checkPossibility(int[] nums) {
        int count = 0; 

        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) { 
                count++;
                if (count > 1) return false; 

               if (i > 0 && nums[i - 1] > nums[i + 1]) {
                    nums[i + 1] = nums[i];  
                } else {
                    nums[i] = nums[i + 1];
                }
            }
        }
        return true;
    }

    public static void main(String[] args) {
        int[] nums = {1,2,3};
        System.out.println(checkPossibility(nums)); 
        System.err.println(nums[0] + " " + nums[1] + " " + nums[2]);
        
    }
}
