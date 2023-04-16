/*
tutorial: https://www.youtube.com/watch?v=wjkKd5yBxRA
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */

//Solution 1 (Array Solution)
// var isValidSudoku = function (board) {
// 	let rows = [];
// 	let cols = [];
// 	let box = []; //key=(3 * r/3 + c/3)
// 	const range = 9;
// 	for (let i = 0; i < range; i++) {
// 		rows.push(new Set());
// 		cols.push(new Set());
// 		box.push(new Set());
// 	}
// 	for (let r = 0; r < range; r++) {
// 		for (let c = 0; c < range; c++) {
// 			let value = board[r][c];
// 			let boxID = 3 * Math.floor(r / 3) + Math.floor(c / 3);
// 			if (value === '.') {
// 				continue;
// 			}
// 			if (rows[r].has(value) || cols[c].has(value) || box[boxID].has(value)) {
// 				console.log(value);
// 				return false;
// 			}
// 			rows[r].add(value);
// 			cols[c].add(value);
// 			box[boxID].add(value);
// 		}
// 	}
// 	return true;
// };

// Solution 2 (String literal)
var isValidSudoku = function (board) {
	let set = new Set();
	const range = 9;
	for (let r = 0; r < range; r++) {
		for (let c = 0; c < range; c++) {
			let cell = board[r][c];
			let boxID = 3 * Math.floor(r / 3) + Math.floor(c / 3);
			if (cell === '.') continue;
			let row = `row: ${r}, value ${cell}`;
			let col = `col: ${c}, value ${cell}`;
			let box = `box: ${boxID}, value ${cell}`;
			if (set.has(row) || set.has(col) || set.has(box)) return false;
			set.add(row);
			set.add(col);
			set.add(box);
		}
	}

	return true;
};

let board1 = [
	['8', '3', '.', '.', '7', '.', '.', '.', '.'],
	['6', '.', '.', '1', '9', '5', '.', '.', '.'],
	['.', '9', '8', '.', '.', '.', '.', '6', '.'],
	['8', '.', '.', '.', '6', '.', '.', '.', '3'],
	['4', '.', '.', '8', '.', '3', '.', '.', '1'],
	['7', '.', '.', '.', '2', '.', '.', '.', '6'],
	['.', '6', '.', '.', '.', '.', '2', '8', '.'],
	['.', '.', '.', '4', '1', '9', '.', '.', '5'],
	['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]; // return false

const board2 = [
	['5', '3', '.', '.', '7', '.', '.', '.', '.'],
	['6', '.', '.', '1', '9', '5', '.', '.', '.'],
	['.', '9', '8', '.', '.', '.', '.', '6', '.'],
	['8', '.', '.', '.', '6', '.', '.', '.', '3'],
	['4', '.', '.', '8', '.', '3', '.', '.', '1'],
	['7', '.', '.', '.', '2', '.', '.', '.', '6'],
	['.', '6', '.', '.', '.', '.', '2', '8', '.'],
	['.', '.', '.', '4', '1', '9', '.', '.', '5'],
	['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]; //return true

console.log(isValidSudoku(board2));
