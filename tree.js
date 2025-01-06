export default (function() {
  class Tree {
    constructor(arr) {
      const sortedArr = arr.toSorted((a, b) => a - b);
      this._root = this.buildTree(sortedArr, 0, sortedArr.length - 1);
    }
    
    buildTree(sortedArr, firstIndex, lastIndex) {
      if (lastIndex < firstIndex) {
        return null;
      }
      const middleIndex = Math.floor((lastIndex + firstIndex) / 2);
      const root = new Node(sortedArr(middleIndex));
      root.left = buildTree(sortedArr, firstIndex, middleIndex - 1);
      root.right = buildTree(sortedArr, middleIndex + 1, lastIndex);
      return root;
    }

    // prettyPrint code courtesy of The Odin Project
    prettyPrint(node, prefix = "", isLeft = true) {
      if (node === null) {
        return;
      }
      if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
      }
      console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
      if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
      }
    };
   
  }

  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }

    // TODO: Anything else needed here?
  }
}());