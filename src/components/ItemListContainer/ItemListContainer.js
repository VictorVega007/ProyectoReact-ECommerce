import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../asyncmock';

const ItemListContainer = (props) => {
    console.log(props.greeting);

    const [products, setProducts] = useState([]);

    useEffect (() => {
        getProducts().then(p => {
            setProducts(p)
        }).catch(error => {
            console.log(error)
        })     
    }, [])

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos al carrito`)
      }

    return (
        <div className='ListContainer'>
        <h1 className = 'Title'>{props.greeting}</h1>
        <ItemCount stock={5} initial={1} onAdd={handleOnAdd} />
        <ItemList products = {products} />
        </div>
    )
}

export default ItemListContainer;