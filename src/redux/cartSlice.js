import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        item: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [],
        totalamount: localStorage.getItem("totalamount") ? localStorage.getItem("totalamount") : 0,
        discount: 15,
        totaldiscount: 0,
        grandtotal: localStorage.getItem("grandtotal") ? localStorage.getItem("grandtotal") : 0,
        count: localStorage.getItem("count") ? localStorage.getItem("count") : 0,
        discountcoupon: "hello",
    },

    reducers: {
        add(state, action) {
            let index = state.item.findIndex((list) => list.id === action.payload.id && list.finishing === action.payload.finishing && list.size === action.payload.size)
            if (index >= 0) {
                state.item[index].quantity = state.item[index].quantity + action.payload.quantity
            }
            else {
                state.item.push(action.payload);
            }
            localStorage.setItem("cartItem", JSON.stringify(state.item))
        },
        remove(state, action) {

            return { ...state, item: state.item.filter((item) => item.id !== action.payload) };
        },
        removeAll(state, action) {
            console.log("removeAll")
            localStorage.removeItem("count")
            localStorage.removeItem("cartItem")
            localStorage.removeItem("totalamount")
            localStorage.removeItem("grandtotal")
            return { ...state, item: [], totalamount: 0, grandtotal: 0, count: 0 };
        },
        increament(state, action) {
            let updatecart = state.item.map((cur) => {
                if (cur.id === action.payload) {
                    return { ...cur, quantity: cur.quantity + 1 }
                }
                return cur
            });

            var sum = 0;
            var noProduct = 0
            updatecart.map((item) => {
                if (item.save === 0) {
                    sum = sum + item.price * item.quantity;
                    noProduct = item.quantity + noProduct
                }
                else {
                    sum = sum + ((item.price) - ((item.price * item.save) / 100)) * item.quantity;
                    noProduct = item.quantity + noProduct
                }
                return sum
            })

            // console.log(updatecart)
            localStorage.setItem("cartItem", JSON.stringify(updatecart))
            localStorage.setItem("count", noProduct)
            localStorage.setItem("totalamount", sum)
            localStorage.setItem("grandtotal", sum)
            return { ...state, item: updatecart, totalamount: sum, grandtotal: sum, count: noProduct }
        },
        decreament(state, action) {
            let updatecart = state.item.map((cur) => {
                if (cur.id === action.payload) {
                    return { ...cur, quantity: cur.quantity - 1 }
                }
                return cur
            }).filter((cur) => cur.quantity !== 0);
            var sum = 0;
            var noProduct = 0
            updatecart.map((item) => {
                if (item.save === 0) {
                    sum = sum + item.price * item.quantity;
                    noProduct = item.quantity + noProduct
                }
                else {
                    sum = sum + ((item.price) - ((item.price * item.save) / 100)) * item.quantity;
                    noProduct = item.quantity + noProduct
                }
                return sum

            })
            // console.log(updatecart)
            localStorage.setItem("cartItem", JSON.stringify(updatecart))
            localStorage.setItem("count", noProduct)
            localStorage.setItem("totalamount", sum)
            localStorage.setItem("grandtotal", sum)
            return { ...state, item: updatecart, totalamount: sum, grandtotal: sum, count: noProduct }
        },
        total(state, action) {
            var sum = 0;
            var noProduct = 0
            state.item.map((item) => {
                if (item.save === 0) {
                    sum = sum + item.price * item.quantity;
                    noProduct = item.quantity + noProduct
                }
                else {
                    sum = sum + ((item.price) - ((item.price * item.save) / 100)) * item.quantity;
                    noProduct = item.quantity + noProduct
                }
                return sum
            })
            localStorage.setItem("count", noProduct)
            localStorage.setItem("totalamount", sum)
            localStorage.setItem("grandtotal", sum)
            return { ...state, totalamount: sum, grandtotal: sum, count: noProduct }
        },
        grandtotals(state, action) {
            var t = state.totalamount;
            var td1 = t - ((t * state.discount) / 100);
            return { ...state, grandtotal: td1 }
        },
        finddiscount(state, action) {
            var fd = state.totalamount;
            var fd1 = ((fd * state.discount) / 100);

            return { ...state, totaldiscount: fd1 }
        }
    },
});

export const { add, remove, increament, decreament, total, grandtotals, finddiscount,removeAll } = cartSlice.actions;
export default cartSlice.reducer;