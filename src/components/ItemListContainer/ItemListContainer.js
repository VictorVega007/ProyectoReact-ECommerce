import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../asyncmock';
import { useState, useEffect } from 'react';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    useEffect (() => {
        getProducts().then(p => {
            setProducts(p)
        }).catch(error => {
            console.log(error)
        })     
    }, [])

    return (
        <div className='ListContainer'>
        <h1 className = 'Title'>{props.greeting}</h1>
        <ItemList products = {products} />
        </div>
    )
}

export default ItemListContainer;