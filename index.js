var cart = [];
var newItem = {itemName: item, itemPrice: Math.floor(Math.random() * 101)}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push(newItem);
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
   return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    var oneInCart = `In your cart, you have ${Object.keys(cart[0])} at ${cart[0][Object.keys(cart[0])]}.`
    return oneInCart
  } else if (cart.length === 2) {
    var twoInCart = `In your cart, you have ${Object.keys(cart[0])} at , and ${Object.keys(cart[1])} at ${cart[0][Object.keys(cart[0])]}.`
    return twoInCart
  } else {
    for(i=0; cart.lenght>i;i++)
    return 
  }
  }

function total() {
  for(i = 0; i < cart.length; i++) {
    
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
