import './ItemList.css'
import Item from "../Item/Item";

const ItemList = ({products}) => {

        return (
            <div className = 'CardContainer'>
            { products.map(prod => <Item key={prod.id} {...prod} className = 'CardItem' />)}
            </div>
        )
}

export default ItemList;