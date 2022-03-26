import './NavBar.css'

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
        <div className = 'Cart'>
            <img className = 'CartImg' src='./images/shopping-cart.png'  alt='cart'/>
            <span className = 'Counter'>0</span>
        </div>
        </div>
    )
}

export default NavBar