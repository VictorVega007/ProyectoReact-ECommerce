import './App.css';
import '../src/components/ItemDetailContainer/ItemDetailContainer.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart'
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import { Fragment } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';


function App() {


  return (
    <Fragment>
      <CartContextProvider>
        <BrowserRouter>
          <header className = 'NavBar'>
            <NavBar />
          </header>

          <Routes>
            <Route path = '/' element = { <ItemListContainer className = 'Title' greeting = {'Hola bienvenid@ a la tienda!'} /> } />
            <Route path = '/category/:categoryId' element = { <ItemListContainer /> } />
            <Route path = '/detail/:productId' element = { <ItemDetailContainer /> } /> 
            <Route path = '/cart' element = { <Cart /> } />
            <Route path = '/form' element = { <Form/> } />
            <Route path = '*' element = { <h1 className = 'Messages'>NOT FOUND 404</h1 >}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      <Footer/>
    </Fragment>
  );
}

export default App;
