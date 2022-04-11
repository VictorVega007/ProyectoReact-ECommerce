import './ItemDetailContainer.css'
import { useState, useEffect } from "react";
import { getItemDetail } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);

    const { productId } = useParams ()

    useEffect(() => {
        getItemDetail(productId).then(item => {
            setProduct(item);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        })
        return (() => {
            setProduct()
        })

    }, [productId]);

    return (
        <div className = 'Messages'>
            {
                loading ?
                    <h2>Cargando productos...</h2> :
                product ?
                    <ItemDetail {...product}/> :
                    <h2>El producto no existe</h2>
            }
            
        </div>
    )

}

export default ItemDetailContainer;