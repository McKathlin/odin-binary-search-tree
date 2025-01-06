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

    find(value, branch = this._root) {
      if (branch == null) {
        return null;
      } else if (value == branch.data) {
        return branch;
      } else if (value < branch.data) {
        return this.find(value, branch.left);
      } else {
        return this.find(value, branch.right);
      }
    }

    has(value) {
      return !!this.find(value);
    }

    insert(value, branch = this._root) {
      if (branch == null) {
        const newNode = new Node(value);
        if (this._root == null) {
          this._root = newNode;
        }
        return newNode;
      }

      // On a non-null branch, we return the branch with the value inserted.
      if (value < branch.data) {
        branch.left = this.insert(value, branch.left);
      } else if (value > branch.data) {
        branch.right = this.insert(value, branch.right);
      }
      return branch;
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
  }

  return Tree;
}());