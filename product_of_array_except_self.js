/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function (nums) {
    let len=nums.length;
    let res=[];

	let prefix = 1;
	for (let i = 0; i < len; i++) {
		res[i] = prefix;
		prefix *= nums[i];
    }

	let post = 1;
	for (let i = len-1; i >= 0; i--) {
		res[i] *= post;
		post *= nums[i];
    }
    return res
};

let nums = [-1, 1, 0, -3, 3]; //Output: [0,0,9,0,0]
// let nums = [1, 2, 3, 4]; // Output: [24,12,8,6]
console.log(productExceptSelf(nums));
