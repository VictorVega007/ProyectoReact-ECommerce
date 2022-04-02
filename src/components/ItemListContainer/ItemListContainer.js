import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {
    console.log(props.greeting);

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos al carrito`)
      }

    return (
        <div className='ListContainer'>
        <h1 className = 'Title'>{props.greeting}</h1>
        <ItemCount stock={5} initial={1} onAdd={handleOnAdd} />
        </div>
    )
}

export default ItemListContainer;