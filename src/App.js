import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './components/Cart';
import Form from './components/Form';
import Proveedor from './context/CartContext';

function App() {
  return (

    <Proveedor>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <NavBar />  
            </header>
            <Routes>
                <Route path='/' element={<ItemListContainer />}/>
                <Route path='/category/:categoryName' element={<ItemListContainer />}/>
                <Route path='/item/:id' element={<ItemDetailContainer />}/>
                <Route path='/cart' element={<Cart/>} />
                <Route path='/checkout' element={<Form/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </Proveedor>
  );
}

export default App;
