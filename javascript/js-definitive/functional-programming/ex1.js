// amazon shopping

const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
};

/** implement a cart feature
 * 1. add items to cart
 * 2. add 3% tax to item in cart
 * 3. buy item: cart -> purchases
 * 4. empty cart
 *
 * bonus
 * accept refunds
 * track user history
 *
 */
function pprint(obj) {
  console.log(JSON.stringify(obj));
}

// let result = purchaseItem(user, { name: "laptop", price: 123 });
// pprint(result);

// function purchaseItem(user, item) {
//   return Object.assign({}, user, { purchases: item });
// }

const compose =
  (f, g, index) =>
  (...args) => {
    console.log(`***${index} **f=${f.name}, g=${g.name}, args=${args}`);
    return f(g(...args));
  };

function purchaseItem(...fns) {
  return fns.reduce(compose);
}

function addItemToCart(user, item) {
  const updateCart = user.cart.concat(item);
  //return Object.assign({}, user, { cart: updateCart });

  let result = { ...user, cart: updateCart };
  console.log("-------------addItemToCart , user=", result);
  return result;
}

function applyTaxToItems(user) {
  console.log("-------------applyTaxToItems  ");
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map((item) => {
    return { name: item.name, price: item.price * taxRate };
  });
  return Object.assign({}, user, { cart: updatedCart });
}
function buyItem(user) {
  console.log("-------------buyItem  ");

  return Object.assign({}, user, { purchases: user.cart });
}
function emptyCart(user) {
  console.log("-------------emptyCart  ");
  return Object.assign({}, user, { cart: [] });
}

const updatedUser = purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItems,
  addItemToCart
)(user, { name: "laptop", price: 1234 });
pprint(updatedUser);

// function

// item1 = { name: "macbook", price: 1100 };
// let user1 = addItem(item1, user);
// console.log(user1.cart[0]);

// console.log(addTax(item1));
