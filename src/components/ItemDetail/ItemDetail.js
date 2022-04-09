import './ItemDetail.css'
import '../ItemCount/ItemCount.css'
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({name, img, category, description, price}) => {


    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos al carrito`)
      }

    return (
        
        <div className='ItemContainer'>
            <div className='CardItemDetail'>
            <div className='Detail'>
                <h1>Detalle</h1>
            </div>
            <div className='Picture'>
                <img className = 'DetailImg' src = {img} alt = {name} />
            </div>
            <h3 className = 'Props'>{name}</h3>
            <p className = 'Props'>{category}</p>
            <div className='DescriptionContainer'>
                <h3>Descripción del Producto</h3>
                <p>{description}</p>
            </div>
            <div className='Price'>
            <p>Precio</p>
            <p>USD {price}</p>
            </div>
            <ItemCount stock={5} initial={1} onAdd={handleOnAdd} />
            </div>
        </div>
    )
}

export default ItemDetail;