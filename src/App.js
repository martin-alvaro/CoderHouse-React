import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>  
        <ItemListContainer greeting='Bienvenidos a Complejo 22'/>
      </header>
    </div>
  );
}

export default App;
