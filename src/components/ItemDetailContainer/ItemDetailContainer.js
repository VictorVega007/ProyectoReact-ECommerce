import './ItemDetailContainer.css'
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductsDB } from '../../services/firebase';
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);

    const { productId } = useParams ()

    useEffect(() => {

        getDoc(doc((getProductsDB), 'products', productId)).then(response =>{ 
            const product = {id: response.id, ...response.data()} 
            setProduct(product);
        }).finally(() => { 
            setLoading(false)
            });
        

        return (() => {
            setProduct()
        })

    }, [productId]);

    return (
        <div className = 'Messages'>
            {
                loading ?
                    <>
                        <div className='SpinnerContainer'>
                            <h2>Cargando productos...</h2>
                            <p className='Spinner'></p>
                        </div> 
                    </> :
                product ?
                    <ItemDetail {...product}/> :
                    <h2>El producto no existe</h2>
            }
            
        </div>
    )

}

export default ItemDetailContainer;