/**
 * https://youtu.be/B1k_sxOSgv8
 * Design an algorithm to encode a list of strings to a string. The encoded string is then send over the network and is decoded back to the original list of strings.
 *
 * Please implement encode and decode
 *
 * Input: ["lint", "code", "love", "you"]
 * Output: ["lint", "code", "love", "you"]
 * Explanation:
 * One possible encode method is: "lint:;code:;love:;you"
 *
 * Input: ["we", "say", ":", "yes"]
 * Output: ["we", "say", ":", "yes"]
 * Explanation:
 * One possible encode method is: "we:;say:;:::;yes"
 */

const strs = ['lint', 'cod#euu#', 'love', '2'];
const strs2 = ['we', 'say', ':', 'yes'];

let encodeStr = encode(strs);
console.log(encodeStr);
console.log(decode(encodeStr));

/**
 * @param {string[]} strs
 * @return {string}:encodes a list of strings to a single string.
 */
function encode(strs) {
	let res = '';
	for (let s of strs) {
		res += s.length.toString() + '#' + s;
	}
	return res;
}

/**
 * @param {string} str
 * @return {string[]}: decodes a single string to a list of strings
 */
function decode(str) {
	let res = [];
	let i = 0;
	while (i < str.length) {
		let j = i;
		while (str[j] !== '#') {
			j += 1;
		}
		let length = parseInt(str.slice(i, j));
		res.push(str.slice(j + 1, j + 1 + length));
		i = j + 1 + length;
	}
	return res;
}
