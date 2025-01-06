import Tree from "./tree.js";

let emptyTree = new Tree([]);
logTests(emptyTree);

let singleItemTree = new Tree([42]);
singleItemTree.insert(42);
singleItemTree.insert(10);
singleItemTree.deleteItem(42);
singleItemTree.deleteItem(321);
logTests(singleItemTree);

let simpleTree = new Tree([10, 30, 20]);
simpleTree.insert(25);
simpleTree.deleteItem(20);
logTests(simpleTree);

let biggerTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
biggerTree.insert(-5);
biggerTree.insert(12);
biggerTree.insert(100);
biggerTree.deleteItem(7);
biggerTree.deleteItem(8);
logTests(biggerTree);

let leaningTree = new Tree([3, 6]);
leaningTree.insert(7);
leaningTree.insert(8);
leaningTree.insert(9);
leaningTree.insert(10);
leaningTree.deleteItem(7);
logTests(leaningTree);

function logTests(tree) {
  console.log('=============');
  tree.prettyPrint();
  console.log('Depth:', tree.depth());
  console.log(`Range: ${tree.findMinimum()} to ${tree.findMaximum()}`);
  console.log("Balanced?", tree.isBalanced());
}