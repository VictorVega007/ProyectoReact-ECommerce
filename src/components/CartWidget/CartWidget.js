import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {

    const { getProductQuantity } = useContext(CartContext);

    return (
        
        <div className = 'Cart'>
            <Link className='Cart' to = '/cart'>
                <img className = 'CartImg' src='https://www.pngall.com/wp-content/uploads/5/Shopping-Cart-PNG-Image-HD.png'  alt='cart'/>
                <div className = 'Counter'>
                <span>{ getProductQuantity() }</span>
                </div>
            </Link>
        </div>
        
    )
}

export default CartWidget