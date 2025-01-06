export default (function() {
  class Tree {
    constructor(arr = []) {
      // The source array must be duplicate-free and sorted.
      const sortedArr = Array.from(new Set(arr)).sort((a, b) => a - b);
      this._root = this.buildTree(sortedArr, 0, sortedArr.length - 1);
    }
    
    buildTree(sortedArr, firstIndex, lastIndex) {
      if (lastIndex < firstIndex) {
        return null;
      }
      const middleIndex = Math.floor((lastIndex + firstIndex) / 2);
      const root = new Node(sortedArr[middleIndex]);
      root.left = this.buildTree(sortedArr, firstIndex, middleIndex - 1);
      root.right = this.buildTree(sortedArr, middleIndex + 1, lastIndex);
      return root;
    }



    // prettyPrint code courtesy of The Odin Project
    prettyPrint(node = this._root, prefix = "", isLeft = true) {
      if (node === null) {
        return;
      }
      if (node.right !== null) {
        this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
      }
      console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
      if (node.left !== null) {
        this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
      }
    };
   
  }

  class Node {
    constructor(value) {
      this.data = value;
      this.left = null;
      this.right = null;
    }

    // TODO: Anything else needed here?
  }

  return Tree;
}());