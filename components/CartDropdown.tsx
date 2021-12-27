import { ButtonToolbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import EmptyState from './common/EmptyState';

const CartDropdown = () => {
  const cartItem = () => {
    return (
      <div className="box cart-item flex">
        <img src="/images/car.png" />
        <div className="details">
          <h6>Зуны дугуй</h6>
          <span className="price">Үнэ: 500,000₮</span>
          <div className="count"></div>
          <i className="fa-solid fa-trash-can"></i>
        </div>
      </div>
    );
  };
  return (
    <Dropdown align="end">
      <Dropdown.Toggle className="transparent cart-btn" variant="success" id="dropdown-basic">
        <i className="fa-solid fa-cart-shopping" />
        <span className="badge">3</span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="cart">
        <div>
          <span>Миний сагс</span>
          {cartItem()}
          {cartItem()}
          <div className="total flex space-between">
            <span>Нийт</span>
            <span>1,500,000₮</span>
          </div>
          <ButtonToolbar className="">
            <Button variant="primary" className="logout">
              Төлбөр төлөх
            </Button>
          </ButtonToolbar>
        </div>
        {/* <EmptyState cart title="Таны сагс хоосон байна." /> */}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CartDropdown;
