const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = { pizzaBase: 1000 };

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    orderPizza: (state) => {
      state.pizzaBase--;
    },
  },
});

module.exports = pizzaSlice.reducer; //Default export
module.exports.pizzaActions = pizzaSlice.actions; //Named export
