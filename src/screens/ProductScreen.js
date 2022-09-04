import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { productDetailActions } from '../redux/product/productDetailSlice';
import Loader from '../components/Loader';
import axios from 'axios';

const ProductScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState();

  const dispatch = useDispatch();
  const { loading, product, error } = useSelector(
    (state) => state.productDetail
  );

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://joyous-goat-moccasins.cyclic.app/products/${id}`
        );
        dispatch(productDetailActions.getProduct(data));
      } catch (error) {
        dispatch(productDetailActions.error(error.message));
      }
    };
    fetchProduct();
  }, [id, dispatch]);

  return (
    <>
      <div className='product'>
        <button className='btn btn-dark my-3' onClick={() => navigate(-1)}>
          Go Back
        </button>

        {loading ? (
          <Loader />
        ) : error ? (
          <h5 className='text-danger text-center'>{error}</h5>
        ) : (
          <Row className='g-4'>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2 className='mb-3'>{product.name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className='fs-3 fw-bold'>Price: ${product.price}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className='product-stock fs-4 fw-bold'>
                    Stock:
                    <span
                      className={`${
                        product.countInStock > 0 ? 'text-dark' : 'text-danger'
                      }`}
                    >
                      {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </span>
                  </span>
                </ListGroup.Item>
                <div
                  className={`product-qty-cart mt-4 ${
                    product.countInStock === 0 ? 'd-none' : 'd-flex'
                  }`}
                >
                  <select
                    name=''
                    className='form-select border-secondary'
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                  <button className='btn btn-dark' type='button'>
                    Add To Cart
                  </button>
                </div>
                <div>
                  <p className='fs-4 my-3'>
                    <span className='fw-bold'>Description: </span>
                    {product.description}
                  </p>
                </div>
              </ListGroup>
            </Col>
          </Row>
        )}
      </div>
    </>
  );
};

export default ProductScreen;
