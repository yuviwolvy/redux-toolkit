const configureStore = require("@reduxjs/toolkit").configureStore;
const pizzaReducer = require("../features/pizza/pizza-slice");

const store = configureStore({ reducer: { pizza: pizzaReducer } });
