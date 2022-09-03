import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <>
      <Card className='my-3 p-2 rounded'>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top' />
        </Link>

        <Card.Body className='d-flex flex-column pb-1'>
          <Link to={`/product/${product._id}`}>
            <Card.Title as='div'>
              <strong className='fs-4'>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text
            as='div'
            className='mt-auto d-flex justify-content-between align-items-center'
          >
            <h3>${product.price}</h3>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
