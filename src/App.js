// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Fragment } from 'react';


function App() {


  return (
    <Fragment>
      <header className = 'NavBar'>
        <NavBar />
      </header>
      <ItemListContainer className = 'Title' greeting = {'Hola bienvenid@ a la tienda!'}/>
    </Fragment>
  );
}

export default App;
