import './ItemCount.css';
import { Fragment, useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const increment = () => {
        if(count < stock) {
            setCount(count + 1);
        }
    }


    const decrement = () => {
        if(count > initial){
            setCount(count - 1);
        }
    }


    return (
        <Fragment>
            <div className = 'ItemCountContainer'>
            <div>
            <p>Elige la cantidad de tu producto</p>
            </div>
            <div className = 'ItemCount'>
            <button className = 'ButtonCount ButtonCountAdd' onClick = {increment}>+</button>
            <p className = 'ProductCounter'>{count}</p>
            <button className = 'ButtonCount ButtonCountMinus' onClick = {decrement}>-</button>
            </div>
            <div>
            <button className = 'ButtonToAddProduct ButtonCountAdd' onClick = {() => onAdd(count)} >Agregar al carrito</button>
            </div>
            </div>
        </Fragment>
    )
}

export default ItemCount;