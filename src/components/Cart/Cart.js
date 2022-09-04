import { ListGroup, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.itemsList);

  let total = 0;
  cartItems.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Your Cart</h1>
        </Col>
        <Col style={{ textAlign: 'right' }}>
          <button className='btn btn-dark my-3' onClick={() => navigate(-1)}>
            Go Back
          </button>
        </Col>
      </Row>
      <Row>
        <ListGroup variant='flush' className='list-unstyled'>
          {cartItems.length ? (
            cartItems.map((item) => (
              <ListGroup.Item key={item.id} className='py-3'>
                <CartItem
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  quantity={item.quantity}
                  countInStock={item.countInStock}
                  price={item.price}
                  total={item.totalPrice}
                />
              </ListGroup.Item>
            ))
          ) : (
            <li className='empty-cart'>Cart is Empty</li>
          )}
          <ListGroup.Item>
            <h4 className='mt-2 text-end'>Total: ${total.toFixed(2)}</h4>
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </>
  );
};

export default Cart;
