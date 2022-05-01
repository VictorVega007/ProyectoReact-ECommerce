import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { CartContextProvider } from "../../context/CartContext";

export const OrderResume = () => {

    const { cart, total } = useContext(CartContext);
    console.log(cart)

    return (
        <CartContextProvider>
            {
                cart.map(p => 
                    <div key={p.id}>
                        <div>{p.name}</div>
                        <div>{p.quantity}</div>
                        <div>{p.price * p.quantity}</div>
                        <div>{total}</div>
                    </div>
                )
            }
        </CartContextProvider>
    )
}