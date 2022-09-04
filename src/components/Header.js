import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';

const Header = () => {
  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <header>
      <Navbar collapseOnSelect bg='dark' variant='dark' expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>REACT SHOP</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse>
            <Nav className='ms-auto my-2 my-lg-0'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fa-solid fa-cart-shopping'></i>
                  Cart
                  <Badge pill bg='info' style={{ marginTop: '-11px' }}>
                    {totalQuantity}
                  </Badge>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
