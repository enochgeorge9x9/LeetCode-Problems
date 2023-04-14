/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

s="anagram"
t="anagarm"

var isAnagram=function (s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
};

console.log(isAnagram(s,t))