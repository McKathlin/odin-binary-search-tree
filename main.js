import Tree from "./tree.js";

let emptyTree = new Tree([]);
logTests(emptyTree);

let singleItemTree = new Tree();
singleItemTree.insert(42);
logTests(singleItemTree);

let smallTree = new Tree([2]);
smallTree.insert(0);
smallTree.insert(2);
logTests(smallTree);

let simpleTree = new Tree([10, 30, 20]);
logTests(simpleTree);
simpleTree.insert(25);
logTests(simpleTree);

let biggerTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
biggerTree.insert(-5);
biggerTree.insert(12);
biggerTree.insert(100);
logTests(biggerTree);

let leaningTree = new Tree([3, 6]);
leaningTree.insert(7);
leaningTree.insert(8);
leaningTree.insert(9);
leaningTree.insert(10);
logTests(leaningTree);

function logTests(tree) {
  console.log('=============');
  tree.prettyPrint();
  console.log('Depth:', tree.depth());
  console.log(`Range: ${tree.findMinimum()} to ${tree.findMaximum()}`);
  console.log("Balanced?", tree.isBalanced());
}