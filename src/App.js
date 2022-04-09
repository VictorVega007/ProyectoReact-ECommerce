import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Fragment } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {


  return (
    <Fragment>
      <header className = 'NavBar'>
        <NavBar />
      </header>
      <ItemListContainer className = 'Title' greeting = {'Hola bienvenid@ a la tienda!'}/>
      <ItemDetailContainer />
    </Fragment>
  );
}

export default App;
