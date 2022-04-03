import './ItemList.css'
import Item from "../Item/Item";

const ItemList = ({products}) => {

        return (
            <div className = 'CardContainer'>
            {products.map(prod => <Item {...prod} />)}
            </div>
        )
}

export default ItemList;