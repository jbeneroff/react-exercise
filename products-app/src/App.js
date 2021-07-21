import './App.css';
import { Route } from 'react-router-dom'
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
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
