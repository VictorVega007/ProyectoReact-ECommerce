import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    const arr = ['Menu', 'MenuItems'];
    return (
        <div className = 'NavBar'>
        <div className = 'Logo'>
            <img className = 'ImgLogo' src={'./images/logo.png'} alt='logo' />
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
        </div>
    )
}

export default NavBar