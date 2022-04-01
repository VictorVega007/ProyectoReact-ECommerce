import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);
    // const [newStock, setStock] = useState(stock);

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
        <div>
            <button onClick={increment}>+</button>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <div>
            <button onClick = {() => onAdd(count) } >Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;