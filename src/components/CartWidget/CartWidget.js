import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className = 'Cart'>
            <img className = 'CartImg' src='./images/shopping-cart.png'  alt='cart'/>
            <div className = 'Counter'>
            <span>0</span>
            </div>
        </div>
    )
}

export default CartWidget