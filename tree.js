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

    deleteItem(value, branch = this._root) {
      // Check if there's anything here.
      if (branch == null) {
        return null;
      }
      
      // Recurse left or right as needed.
      if (value < branch.data) {
        branch.left = this.deleteItem(value, branch.left);
        return branch;
      }
      if (value > branch.data) {
        branch.right = this.deleteItem(value, branch.right);
        return branch;
      }

      // If we're here, this is the node to delete.
      if (!branch.left || !branch.right) {
        // Replace this node with its only branch (or with nothing).
        let newBranch = branch.left ?? branch.right ?? null;
        if (branch == this._root) {
          this._root = newBranch;
        }
        return newBranch;
      }

      // If we're here, we must delete this node that branches on both sides.
      // We do this by swapping its nearest value up to replace it,
      // and then deleting the node the swap was made from.
      // For balance, we take the nearest value on the deeper side.
      let sourceBranch, nearestValue;
      if (this.height(branch.left) > this.height(branch.right)) {
        sourceBranch = branch.left;
        nearestValue = this.findMaximum(branch.left);
      } else {
        sourceBranch = branch.right;
        nearestValue = this.findMinimum(branch.right);
      }
      branch.data = nearestValue;
      this.deleteItem(nearestValue, sourceBranch);
      return branch;
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

    findMaximum(branch = this._root) {
      if (!branch) {
        return null;
      } else if (branch.right) {
        return this.findMaximum(branch.right);
      } else {
        return branch.data;
      }
    }

    findMinimum(branch = this._root) {
      if (!branch) {
        return null;
      } else if (branch.left) {
        return this.findMinimum(branch.left);
      } else {
        return branch.data;
      }
    }

    has(value) {
      return !!this.find(value);
    }

    height(branch = this._root) {
      if (branch == null) {
        return 0;
      }

      const leftHeight = branch.left ? this.height(branch.left) : 0;
      const rightHeight = branch.right ? this.height(branch.right) : 0;
      return 1 + Math.max(leftHeight, rightHeight);
    }

    inOrder(callback, branch = this._root) {
      if (!callback) {
        throw new Error("inOrder requires a callback function " +
          "that takes an argument for the current node's data.");
      }

      if (branch == null) {
        return;
      }

      if (branch.left) {
        this.inOrder(callback, branch.left);
      }
      callback(branch.data);
      if (branch.right) {
        this.inOrder(callback, branch.right);
      }
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

    isBalanced(branch = this._root) {
      // A null branch is balanced trivially.
      if (branch == null) {
        return true;
      }

      // Check if sides have near equal heights.
      const leftHeight = this.height(branch.left);
      const rightHeight = this.height(branch.right);
      if (Math.abs(leftHeight - rightHeight) > 1) {
        return false;
      }

      // Check if each side is balanced.
      if (!this.isBalanced(branch.left)) {
        return false;
      }
      if (!this.isBalanced(branch.right)) {
        return false;
      }

      // If we're here, all balance tests have passed.
      return true;
    }

    levelOrder(callback) {
      if (!callback) {
        throw new Error("levelOrder requires a callback function " +
          "that takes an argument for the current node's data.");
      }

      if (!this._root) {
        return; // Nothing to iterate.
      }

      // Breadth first traversal
      let queue = [this._root];
      for (let i = 0; i < queue.length; i++) {
        let currentNode = queue[i];
        callback(currentNode.data);
        if (currentNode.left) {
          queue.push(currentNode.left);
        }
        if (currentNode.right) {
          queue.push(currentNode.right);
        }
      }
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