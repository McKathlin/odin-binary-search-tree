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

const ARRAY_SIZE = 30;
let randomArray = new Array(ARRAY_SIZE);
for (let i = 0; i < ARRAY_SIZE; i++) {
  randomArray[i] = Math.floor(Math.random() * 100);
}
let randomTree = new Tree(randomArray);
for (let i = 0; i < 10; i++) {
  let biggerNumber = 100 + Math.floor(Math.random() * 50);
  randomTree.insert(biggerNumber);
}
logTests(randomTree);

function logTests(tree) {
  console.log('=============');
  // Basic info
  tree.prettyPrint();
  console.log('Height:', tree.height());
  console.log(`Range: ${tree.findMinimum()} to ${tree.findMaximum()}`);

  // Balance checks
  console.log("Balanced?", tree.isBalanced());
  tree.rebalance();
  console.log("After rebalance:");
  tree.prettyPrint();
  if (!tree.isBalanced()) {
    console.error("Rebalancing didn't balance the tree!");
  }

  // Order checks
  tree.levelOrder((value) => console.log("Level order", value));
  tree.preOrder((value) => console.log("Pre-order", value));
  tree.postOrder((value) => console.log("Post-order", value));
  tree.inOrder((value) => console.log("In order", value));
}