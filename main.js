import Tree from "./tree.js";

let emptyTree = new Tree([]);
emptyTree.prettyPrint();

let singleNodeTree = new Tree([42]);
singleNodeTree.prettyPrint();

let simpleTree = new Tree([10, 30, 20]);
simpleTree.prettyPrint();

let biggerTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
biggerTree.prettyPrint();