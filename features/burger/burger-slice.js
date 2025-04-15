const { pizzaActions } = require("../pizza/pizza-slice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = { burgerBuns: 2000 };

const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    orderBurger: (state) => {
      state.burgerBuns -= 2;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(pizzaActions.orderPizza, (state) => {
      state.burgerBuns -= 2;
    });
  },
});

module.exports = burgerSlice.reducer; //Default export
module.exports.burgerActions = burgerSlice.actions; //Named export
