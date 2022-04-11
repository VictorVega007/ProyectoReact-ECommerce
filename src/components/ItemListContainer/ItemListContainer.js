import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../asyncmock';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    const { categoryId }  = useParams();

    useEffect (() => {
        getProducts(categoryId).then(p => {
            setProducts(p)
        }).catch(error => {
            console.log(error)
        })     
    }, [categoryId])

    return (
        <div className='ListContainer'>
        <h1 className = 'Title'>{props.greeting}</h1>
        <ItemList products = {products} />
        </div>
    )
}

export default ItemListContainer;