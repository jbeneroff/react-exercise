import './App.css';
import { Route } from 'react-router-dom'
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/'>
        <Products />
      </Route>
      <Route path='/:id'>
        <ProductDetail />
      </Route>
    </div>
  );
}

export default App;
