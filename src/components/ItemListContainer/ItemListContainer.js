import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
// import { getProducts } from '../../asyncmock';
import { getDocs, collection, query, where, orderBy  } from 'firebase/firestore'
import { getProductsDB } from '../../services/firebase';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    const { categoryId }  = useParams();

    useEffect (() => {
        // getProducts(categoryId).then(p => {
        //     setProducts(p)
        // }).catch(error => {
        //     console.log(error)
        // })     

        const collectionRef = categoryId 
            ? query(collection(getProductsDB, 'products'), where('category', '==', categoryId)) 
            : query(collection(getProductsDB, 'products'), orderBy('name', 'asc'))
            // : collection(getProductsDB, 'products');


        getDocs(collectionRef).then(response => {
            
            const products = response.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setProducts(products);
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