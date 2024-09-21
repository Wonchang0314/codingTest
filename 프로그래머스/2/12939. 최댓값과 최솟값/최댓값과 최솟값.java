import java.util.Arrays;
class Solution {
    public String solution(String s) {
        String answer = "";
        String[] temp = s.split(" ");
        int[] arr = new int[temp.length];
        for(int i = 0; i < temp.length; i++){
            arr[i] = Integer.parseInt(temp[i]);
        }
        Arrays.sort(arr);
        answer += String.valueOf(arr[0]);
        answer += " ";
        answer += String.valueOf(arr[arr.length - 1]);
        return answer;
    }
}