/* Question:
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

// const nums=[1, 2, 3, 1];
// const nums=[1, 2, 3, 4];
// const nums=[1,1,1,3,3,4,,3,2,4,2]

// My Solution
function containDuplicates(nums) {
    set=new Set(nums)
    return set.size !=== nums.length;
    if (listLen===setLen) {
        return false;
        exit();
    }
    return true;
}

// Better Solution
function containDuplicates(nums) {
    set=new Set(nums)
    return set.size !== nums.length;
}

console.log(containDuplicates(nums));