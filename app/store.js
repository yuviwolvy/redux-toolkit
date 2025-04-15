const configureStore = require("@reduxjs/toolkit").configureStore;
const pizzaReducer = require("../features/pizza/pizza-slice");
const burgerReducer = require("../features/burger/burger-slice");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const productReducer = require("../features/products/product-slice");

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    burger: burgerReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
