
(function(){


  class Node{
    constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

 class BST{
  
  constructor(value){
    this.root = new Node(value);
  }
  
  insertNode(current, value){
    // traverse down from the root
    if (value < current.value){
       if (current.left == null)
         current.left = new Node(value);
       else
         this.insertNode(current.left, value);
    } else {
       if (current.right == null)
         current.right = new Node(value);
       else
         this.insertNode(current.right, value);
        } 
      }

      // we will add various functionalities that govern BST operations
      insert(value){
        if(this.root == null){
          this.root = new Node(value);
        } else {
          this.insertNode(this.root, value);
        }
      }

      preorder(root){
          if (root !== null) {
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right);
          }
      }

      postorder(root){
          if(root !== null){
            this.postorder(root.left);
            this.postorder(root.right);
            console.log(root.value);
          }
      }

      inorder(root){
          if(root !== null){
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
          }
      }


      print(order){
        switch(order){
          case 'preorder':
            this.preorder(this.root);
            break;
          case 'postorder':
            this.postorder(this.root);
            break;
          case 'inorder':
            this.inorder(this.root);
            break;
          default:
            console.log("this is a default block");   
        }
      }

    } // End BST Class


    const bst = new BST(23);
    bst.insert(14);
    bst.insert(31);
    bst.insert(7);
    bst.insert(17);
    bst.insert(9);

    bst.print("inorder");

})();


  
