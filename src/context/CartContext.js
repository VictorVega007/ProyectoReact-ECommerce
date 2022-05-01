import { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    console.log(cart)

    const addItem = (itemToAdd) => {
        setCart([...cart, itemToAdd]);
    }

    const getProductQuantity = () => {
        let count = 0;

        cart.forEach(p => {
            count += p.quantity;
        })

        return count
    }

    const total = () => {
        return cart.reduce((acc, el) => acc + el.quantity * el.price, 0)
    }

    const isInCart = (id) => {
        return (cart.some(p => p.id === id ));
    }

    const clearCart = () => {
        setCart([]);
    }

    const removeItem = (id) => {
        const products = cart.filter(p => p.id !== id);
        setCart(products);
    }

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            getProductQuantity,
            isInCart,
            clearCart,
            removeItem,
            total
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext;