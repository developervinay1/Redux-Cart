import {createSlice} from "@reduxjs/toolkit";
import {productsData} from "../../assets/products.js";

const initialState =  {
    cart: [],
    products: productsData,
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState ,
    reducers: {
        addToCart: (state, action) => {
            let productExist = state.cart.findIndex((item) => item.id === action.payload.id);

            if(productExist >=0) {
                state.cart[productExist].quantity += 1
            } else {
                state.cart.push(action.payload);
            }
        },
        getCartTotal: (state) => {
            const { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.totalPrice = parseFloat(totalPrice.toFixed(2));  // Use parseFloat instead of parseInt for decimal values
            state.totalQuantity = totalQuantity;
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        }

    }
});

export const {addToCart, getCartTotal, removeItem} = cartSlice.actions;

export default cartSlice.reducer;