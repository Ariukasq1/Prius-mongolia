import { ButtonToolbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const UserDropdown = () => {
  return (
    <Dropdown align="end">
      <Dropdown.Toggle className="transparent" variant="success" id="dropdown-basic">
        <h6>
          <span>Сайн байна уу?</span> Хэргэлэгч
        </h6>
        <i className="fa-solid fa-user md-shown"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Button className="dropdown-item">
          <i className="fa-regular fa-circle-user"></i> Миний бүртгэл <i className="fa-solid fa-angle-right"></i>
        </Button>
        <Button className="dropdown-item">
          <i className="fa-solid fa-gear"></i> Миний тохиргоо <i className="fa-solid fa-angle-right"></i>
        </Button>
        <Button className="dropdown-item">
          <i className="fa-solid fa-car"></i> Миний машин <i className="fa-solid fa-angle-right"></i>
        </Button>
        <Button className="dropdown-item">
          <i className="fa-solid fa-store"></i> Миний дэлгүүр <i className="fa-solid fa-angle-right"></i>
        </Button>
        <Button className="dropdown-item">
          <i className="fa-regular fa-copy"></i> Миний зар <i className="fa-solid fa-angle-right"></i>
        </Button>
        <Button className="dropdown-item">
          <i className="fa-solid fa-hand-holding"></i> Миний лояалти <i className="fa-solid fa-angle-right"></i>
        </Button>
        <ButtonToolbar className="slim">
          <Button variant="primary" className="logout">
            Гарах
          </Button>
        </ButtonToolbar>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserDropdown;
