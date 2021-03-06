import './ItemDetail.css'
import '../ItemCount/ItemCount.css'
import ItemCount from '../ItemCount/ItemCount';
import {  useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';


const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    const { addItem, isInCart } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos al carrito`)

        const productObject = {
            id, name, price, img,
        };

        addItem({...productObject, quantity: quantity});
      }

    return (
        
        <div className='ItemContainer'>
            <div className='CardItemDetail'>
                <div className='Detail'>
                    <h1>Detalle</h1>
                </div>
                <div className='Picture'>
                    <img className = 'DetailImg' src = {img} alt = {name} />
                </div>
                    <h3 className = 'Props'>{name}</h3>
                    <p className = 'Props'>{category}</p>
                <div className='DescriptionContainer'>
                    <h3>Descripción del Producto</h3>
                    <p>{description}</p>
                </div>
                <div className='Price'>
                    <p>Precio</p>
                    <p>USD {price}</p>
                    <div>
                        {
                            stock > 0 ? <p>Stock {stock}</p> : <p>Sin Stock</p>
                        }
                    </div>
                    
                </div>
                { isInCart(id) 
                    ? <Link className='Link' to='/cart'>Ir al carrito de compra </Link> 
                    : <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} /> &&
                    stock <= 0 
                    ?  <Link className='Link' to='/'>Ir al inicio </Link> 
                    : <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} /> }
            </div>
        </div>
    )
}

export default ItemDetail;