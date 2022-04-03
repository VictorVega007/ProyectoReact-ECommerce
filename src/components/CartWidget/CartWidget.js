import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className = 'Cart'>
            <img className = 'CartImg' src='https://www.pngall.com/wp-content/uploads/5/Shopping-Cart-PNG-Image-HD.png'  alt='cart'/>
            <div className = 'Counter'>
            <span>0</span>
            </div>
        </div>
    )
}

export default CartWidget