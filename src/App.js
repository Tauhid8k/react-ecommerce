import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <div className='app'>
      <Header />
      <main className='py-4'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/products/:id' element={<ProductScreen />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
