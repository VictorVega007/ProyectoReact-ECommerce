import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Fragment } from 'react';

const NavBar = () => {
    const arr = ['Menu', 'MenuItems'];
    return (
        <Fragment>
        <div className = 'Logo'>
            <div>
            <img className = 'ImgLogo' src={'./images/logo.png'} alt='logo' />
            </div>
            <div>
                <p className = 'ShopName'>WOODSTOCK SHOP</p>
            </div>
        </div>
        <div className = 'Menu'>
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
            </div>
        </div>
            <CartWidget />
        </Fragment>
    )
}

export default NavBar