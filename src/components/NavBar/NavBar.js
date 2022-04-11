import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCategories } from '../../asyncmock';

const NavBar = () => {
    // const arr = ['Menu', 'MenuItems'];

    const [categories, setCategories] = useState([]);

    useEffect (() => {
        getCategories().then(categories => {
            setCategories(categories)
        });
    }, []);



    return (
        <Fragment>
        <div className = 'Logo'>
            <Link to = '/' className='ShopName'>
            <img className = 'ImgLogo' src={'https://cdn-icons-png.flaticon.com/512/3836/3836649.png'} alt='logo' />
            <p>WOODSTOCK SHOP</p> 
            </Link>
        </div>

        <div className = 'Menu'>
            {/* 
            <div className = {arr.join(' ')}>
                <a className = 'Text' href={'.'}>Guitarras</a>
            </div>
            <div className = {arr.join(' ')}>
                <a className = 'Text' href={'.'}>Teclados</a>
            </div>
            <div className = {arr.join(' ')}>
                <a className = 'Text' href={'.'}>Bajos Eléctricos</a>
            </div>
            <div className = {arr.join(' ')}>
                <a className = 'Text' href={'.'}>Baterías</a>
            </div> */}

            
            <NavLink to = '/' className = {({ isActive }) => isActive ? 'MenuItemsActive' : 'Text'}>Productos</NavLink>
            
            
            { categories.map(cat => <NavLink key = {cat.id} to = {`/category/${cat.id}`} 
                className = {({isActive}) => isActive ? 'MenuItemsActive' : 'Text'}
            >{cat.description}</NavLink>)}
            
        </div>
            <CartWidget />
        </Fragment>
    )
}

export default NavBar