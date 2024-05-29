function solution(nums) {
    var answer = 0;
    const max = nums.length / 2;
    const uniquePokemon = new Set(nums);
    answer = Math.min(max, uniquePokemon.size);
    return answer;
}