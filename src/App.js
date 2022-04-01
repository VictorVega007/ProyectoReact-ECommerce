// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {


  return (
    <div className="App">
      <header className="">
        <NavBar />
      </header>
      <ItemListContainer className = 'Title' greeting = {'Hola bienvenid@ a la tienda!'}/>
    </div>
  );
}

export default App;
