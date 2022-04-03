
import './Item.css';
import '../ItemCount/ItemCount.css';

const Item = ({name, img, category, price}) => {
    return (
        <div className = 'Card'>
            <picture>
                <img className = 'CardImg' src = {img} alt = {name} />
            </picture>
            <h3 className = 'Props'>{name}</h3>
            <p className = 'Props'>{category}</p>
            <p className = 'Props'>USD {price}</p>
            <button className = 'ButtonToAddProduct'>Ver Detalle</button>
        </div>
    )
}

export default Item;