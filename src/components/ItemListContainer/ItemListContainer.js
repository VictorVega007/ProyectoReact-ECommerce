import '../Form/Form.css';
import '../Cart/Cart.css'
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/firebase/firestore';
import { useAsync } from '../../hooks/useAsync';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId }  = useParams();

    useAsync(
        setLoading,
        () => getProducts(categoryId),
        setProducts,
        () => console.log('Error en el componente'),
        [categoryId]
    );

    if (loading) {
        return (
            <div className='TextOrder'>
                <div className='SpinnerContainer'>
                    <h1>Cargando productos</h1>
                    <p className='Spinner'></p>
                </div>
            </div>
        )
    }

    if (products.length === 0) {
        return (
            <div className='CartTitle'>
                <h1>No hay productos</h1>
            </div>
        )
    }

    return (
        <div className='ListContainer'>
        <h1 className = 'Title'>{props.greeting}</h1>
        <ItemList products = {products} />
        </div>
    )
}

export default ItemListContainer;