import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <>
      <Card className='my-3 p-2 rounded'>
        <Link to={`products/${product._id}`}>
          <Card.Img src={product.image} variant='top' />
        </Link>

        <Card.Body className='d-flex flex-column pb-1'>
          <Link to={`products/${product._id}`}>
            <Card.Title as='div'>
              <strong className='fs-4'>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text
            as='div'
            className='mt-auto d-flex justify-content-between align-items-center'
          >
            <h3>${product.price}</h3>
            {product.countInStock > 0 ? (
              <span className='add-to-cart-icon fs-3 p-1'>
                <i className='fa-solid fa-cart-plus'></i>
              </span>
            ) : (
              <span className='text-danger fw-bold'>Out Of Stock</span>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
