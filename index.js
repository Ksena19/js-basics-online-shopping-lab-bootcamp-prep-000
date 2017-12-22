var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code her
 var str = {[item]: Math.floor( Math.random(1, 101) * 100 ) }
  cart.push(str);
 }

}

function viewCart() {
  if (!cart.length) {
    return console.log("Your shopping cart is empty.")
  }
const itemsWithPrices = [];
var itemNames = Object.keys(cart[i]);
    var itemName = itemNames[0];
    var itemPrice = cart[i][itemName]

    itemsWithPrices.push(`${itemName} at $${itemPrice}`)
  }

  if (itemsWithPrices.length === 1) {
    return console.log(`In your cart, you have ${itemsWithPrices.join()}.`)
  } else if (itemsWithPrices.length === 2) {
    return console.log(`In your cart, you have ${itemsWithPrices[0]} and ${itemsWithPrices.slice(-1)}.`)
  } else {
    return console.log(`In your cart, you have ${itemsWithPrices.slice(0,-1).join(', ')}, and ${itemsWithPrices.slice(-1)}.`)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
