/**
 * https://youtu.be/P6RZZMu_maU
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * 
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
	if (nums.length === 0) return 0;
	let maxLength = 0;
	let numsSet = new Set(nums);
	for (let num of numsSet) {
		if (!numsSet.has(num - 1)) {
			let currLength = 0;
			while (numsSet.has(num++)) {
				currLength++;
			}
			maxLength = Math.max(maxLength, currLength);
		}
	}
	return maxLength;
};

let nums = [100, 4, 200, 1, 2, 3];

console.log(longestConsecutive(nums));
