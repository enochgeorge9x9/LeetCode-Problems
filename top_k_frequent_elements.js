/**
 * ref: https://www.youtube.com/watch?v=zRDKkKUoq9U
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 */

let nums = [1, 1, 1, 2, 3, 3];
let k = 2;
// Output: [1,2]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	let map = {}; // num:count
	let bucket = []; //{element:count element:count ...}
	for (let i = 0; i < nums.length + 1; i++) bucket.push([]);

	for (const num of nums) {
		if (!map[num]) map[num] = 0;
		map[num]++;
	}

	for (const key in map) {
		bucket[map[key]].push(key);
	}

	let topK = [];
	for (let i = bucket.length - 1; i > 0; i--) {
		if (bucket.length > 0) {
			console.log(bucket[i]);
			topK = [...topK, ...bucket[i]];
			if (topK.length === k) {
				return topK;
			}
		}
	}
};

console.log(topKFrequent(nums, k));
