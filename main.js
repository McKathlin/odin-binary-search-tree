import Tree from "./tree.js";

let emptyTree = new Tree([]);
emptyTree.insert(1);
emptyTree.prettyPrint();

let singleNodeTree = new Tree([42]);
singleNodeTree.insert(0);
singleNodeTree.insert(42);
singleNodeTree.prettyPrint();

let simpleTree = new Tree([10, 30, 20]);
simpleTree.insert(25);
simpleTree.prettyPrint();

let biggerTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
biggerTree.insert(-5);
biggerTree.insert(12);
biggerTree.insert(100);
biggerTree.prettyPrint();