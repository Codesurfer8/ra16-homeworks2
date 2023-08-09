import './App.css';
import products from '../src/Components/Data/Data'
import Store from './Components/Store/Store';

function App() {
  return (
    <>
      <Store products={products} />
    </>
  );
}

export default App;
