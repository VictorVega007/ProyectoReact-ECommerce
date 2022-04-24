import './Cart.css';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className='CartTitle'>
                <h1>No hay productos en el carrito</h1>
                <Link className='LinkToIndex' to='/'>Volver al inicio</Link> 
            </div>
        )
    }

    return (
        <>
            <div className='CartTitle'>
                <h1>Tu carrito de compras</h1>
            </div>
            <div className='ResumeContainer'>
                <div className='ProductDetail'>Producto</div>
                <div className='ItemsCheckout'>Precio U.</div>
                <div className='ItemsCheckout'>Cantidad</div>
                <div className='ItemsCheckout'>Eliminar producto</div>
                <div className='ItemsCheckout'>Subtotal</div>
            </div>
            <div>
                {
                    cart.map(prod => 
                        <div className='CartCheckoutContainer' key={prod.id}>
                            <div className='CartCheckout'><img className='CartImgs' src={prod.img} alt=''/></div>
                            <div className='CartCheckout ProductName'>{prod.name}</div>
                            <div className='CartCheckout'>$ {prod.price}</div>
                            <div className='CartCheckout'>{prod.quantity}</div>
                            <div className='CartCheckout'><button className='CartButton LinkToIndex' onClick={() => removeItem(prod.id)}>X</button></div>
                            <div className='CartCheckout'>$ {prod.quantity * prod.price}</div>
                        </div>
                    )
                }
            </div>
            <div className='TotalPrice'>
                <div className='ItemsCheckout'>TOTAL: </div>
                <div className='ItemsCheckout'>$ {cart.reduce((acc, el) => acc + el.quantity * el.price, 0)}</div>
            </div>
        </>
    )
}

export default Cart