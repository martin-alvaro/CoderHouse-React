import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemDetailContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './components/Cart';

function App() {
  return (
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
          </Routes>
        </div>
    </BrowserRouter>

  );
}

export default App;
