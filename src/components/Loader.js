import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        display: 'block',
        width: '50px',
        height: '50px',
        margin: '0 auto',
      }}
    >
      <span className='visually-hidden'>Loading...</span>
    </Spinner>
  );
};

export default Loader;
