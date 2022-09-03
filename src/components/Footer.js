import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='footer bg-dark'>
      <Container>
        <Row>
          <Col>
            <p className='text-white text-center py-3'>
              Copyright &copy; REACT E-Commerce by Tauhid
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
