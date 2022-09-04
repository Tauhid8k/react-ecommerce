import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Loader from '../components/Loader';
import Product from '../components/Product';
import axios from 'axios';
import { productActions } from '../redux/product/productSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.product);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/data/products.json');
        dispatch(productActions.getAllProducts(data));
      } catch (error) {
        dispatch(productActions.error('Something went wrong!'));
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      <hr />
      {loading ? (
        <Loader />
      ) : error ? (
        <h5 className='text-danger text-center'>{error}</h5>
      ) : (
        <Row>
          {products.map((product) => (
            <Col md={6} lg={4} xxl={3} key={product._id} className='d-flex'>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
