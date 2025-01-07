import Tree from "./tree.js";

let emptyTree = new Tree([]);
logTests(emptyTree);
console.log("Depth of empty:", emptyTree.depth(emptyTree.root));

let singleItemTree = new Tree([42]);
singleItemTree.insert(42);
singleItemTree.insert(10);
singleItemTree.deleteItem(42);
singleItemTree.deleteItem(321);
logTests(singleItemTree);
console.log("Depth at root:", singleItemTree.depth(singleItemTree.root));

let simpleTree = new Tree([10, 30, 20]);
simpleTree.insert(25);
simpleTree.deleteItem(20);
logTests(simpleTree);
console.log("Depth 1 in:", simpleTree.depth(simpleTree.left));

let biggerTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
biggerTree.insert(-5);
biggerTree.insert(12);
biggerTree.insert(100);
biggerTree.deleteItem(7);
biggerTree.deleteItem(8);
logTests(biggerTree);
console.log("Depth 2 in:", biggerTree.depth(biggerTree.left.right));

let leaningTree = new Tree([3, 6]);
leaningTree.insert(7);
leaningTree.insert(8);
leaningTree.insert(9);
leaningTree.insert(10);
leaningTree.deleteItem(7);
logTests(leaningTree);
console.log("Depth 3 in:", leaningTree.depth(leaningTree.right.right.right));
console.log("Depth of wrong tree:", leaningTree.depth(biggerTree.right.left));

function logTests(tree) {
  console.log('=============');
  tree.prettyPrint();
  console.log('Height:', tree.height());
  console.log(`Range: ${tree.findMinimum()} to ${tree.findMaximum()}`);
  console.log("Balanced?", tree.isBalanced());
  tree.inOrder((value) => console.log("In order", value));
  tree.levelOrder((value) => console.log("Level order", value));
  tree.preOrder((value) => console.log("Pre-order", value));
  tree.postOrder((value) => console.log("Post-order", value));
}