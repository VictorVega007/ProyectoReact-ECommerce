
import './Item.css';
import '../ItemCount/ItemCount.css';
import { Link } from 'react-router-dom'

const Item = ({id, name, img, category, price}) => {
    return (
        <div className = 'Card'>
            <picture>
                <img className = 'CardImg' src = {img} alt = {name} />
            </picture>
            <h3 className = 'Props'>{name}</h3>
            <p className = 'Props'>{category}</p>
            <p className = 'Props'>USD {price}</p>
            <Link to = {`/detail/${id}`} className = 'ButtonToAddProduct'>Ver Detalle</Link>
        </div>
    )
}

export default Item;