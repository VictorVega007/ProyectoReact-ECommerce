import { useState, useEffect } from "react";
import { getItemDetail } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getItemDetail(1).then(item => {
            setProduct(item);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        })
        return (() => {
            setProduct()
        })

    }, []);

    return (
        <>
            {
                loading ?
                    <h2>Cargando productos...</h2> :
                product ?
                    <ItemDetail {...product}/> :
                    <h2>El producto no existe</h2>
            }
            
        </>
    )

}

export default ItemDetailContainer;