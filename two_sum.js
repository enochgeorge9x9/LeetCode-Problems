/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

nums = [2, 7, 11, 15];
target = 9;
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 */ var twoSum = function (nums, target) {
	prevMap = {}; //value : index
	for (i = 0; i < nums.length; i++) {
		diff = target - nums[i];
		if (diff in prevMap) {
			return [prevMap[diff], i];
		}
		prevMap[nums[i]] = i;
	}
};

twoSum(nums, target);
