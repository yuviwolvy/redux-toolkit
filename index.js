const store = require("./app/store");
// const { burgerActions } = require("./features/burger/burger-slice");
// const { pizzaActions } = require("./features/pizza/pizza-slice");
const { fetchProducts } = require("./features/products/product-slice");

// console.log("Initial state: ", store.getState());

// const unsubscribe = store.subscribe(() => {
//   console.log("Updated state: ", store.getState());
// });

// store.dispatch(pizzaActions.orderPizza());
// store.dispatch(burgerActions.orderBurger());
store.dispatch(fetchProducts());

// unsubscribe();
