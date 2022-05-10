import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductsDB } from '../../services/firebase';
import { getDocs, collection, orderBy } from 'firebase/firestore';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const NavBar = () => {

    const [categories, setCategories] = useState([]);

    useEffect (() => {

        getDocs(collection(getProductsDB, 'categories'), orderBy ('id', 'asc')).then(response => {
            const categories = response.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setCategories(categories);
        })

    }, []);

    const { cart } = useContext(CartContext);


    return (
        <Fragment>
        <div className = 'Logo'>
            <Link to = '/' className='ShopName'>
            <img className = 'ImgLogo' src={'https://cdn-icons-png.flaticon.com/512/3836/3836649.png'} alt='logo' />
            <p>WOODSTOCK SHOP</p> 
            </Link>
        </div>

        <div className = 'Menu'>   
            <NavLink to = '/' className = {({ isActive }) => isActive ? 'MenuItemsActive' : 'Text'}>Productos</NavLink>
            { categories.map(cat => <NavLink key = {cat.id} to = {`/category/${cat.id}`} 
                className = {({isActive}) => isActive ? 'MenuItemsActive' : 'Text'}
            >{cat.description}</NavLink>)}   
        </div>
            { cart.length === 0 ? <p className='CartText'>Agrega algún item</p> : <CartWidget />}
        </Fragment>
    )
}

export default NavBar