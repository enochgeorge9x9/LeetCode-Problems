/**
 * Link 1: https://youtu.be/vzdNOK2oB2E
 * Link 2: https://leetcode.com/problems/group-anagrams/solutions/718955/three-js-solutions/?orderBy=most_votes&languageTags=javascript
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	let res = new Object();
	strs.forEach((str) => {
		count = new Array(26).fill(0); //a....z

		for (let char of str) {
			count[char.charCodeAt() - 96] += 1; //'a' ASCII is 96
		}
		let key = count.join('#');
		res[key] ? res[key].push(str) : (res[key] = [str]);
	});

	return Object.values(res);
};
// let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']; // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// let strs =[""] //Output: [[""]]
let strs = ['bdddddddddd', 'bbbbbbbbbbc']; //Output: [["bbbbbbbbbbc"],["bdddddddddd"]]

console.log(groupAnagrams(strs));
