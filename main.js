import Tree from "./tree.js";

let emptyTree = new Tree([]);
logTests(emptyTree);

let smallTree = new Tree([42]);
smallTree.insert(0);
smallTree.insert(42);
logTests(smallTree);

let simpleTree = new Tree([10, 30, 20]);
simpleTree.insert(25);
logTests(simpleTree);

let biggerTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
biggerTree.insert(-5);
biggerTree.insert(12);
biggerTree.insert(100);
logTests(biggerTree);

function logTests(tree) {
  console.log('=============');
  tree.prettyPrint();
  console.log(`Range: ${tree.findMinimum()} to ${tree.findMaximum()}`);
}