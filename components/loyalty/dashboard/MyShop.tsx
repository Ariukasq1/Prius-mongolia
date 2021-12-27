import { Button, ButtonToolbar } from 'react-bootstrap';
import Link from 'next/link';
import Alert from '../../common/Alert';

const MyShop = () => {
  return (
    <div className="box my-shop loyalty">
      <div className="box-head flex">
        <h6>Миний дэлгүүр</h6>
        <ButtonToolbar className="slim">
          <Button variant="primary">Дэлгүүр нэмэх</Button>
        </ButtonToolbar>
      </div>
      <div className="box-body">
        <div className="car-card flex">
          <img src="/images/car.png" alt="" />
          <div className="car-details">
            <p>“ДА ХҮРЭЭ” Авто сэлбэг худалдааны төв</p>
            <p>
              Явсан км: <strong>114,000</strong>
            </p>
            <p>
              Явсан км: <strong>114,000</strong>
            </p>
          </div>
          <div className="action">
            <i className="fa-solid fa-pen-to-square"></i>
            <i className="fa-solid fa-trash-can"></i>
          </div>
        </div>

        <Alert
          type="small"
          text="Зарын самбар дээр өөрийн гэсэн дэлгүүрээ нээж зар тавьсанаар цахим хуудсаар зочлогсдод илүү итгэл төрүүлэх боломжтой. Хэрэглэгч эхний дэлгүүрээ нээхэд үнэ төлбөргүй."
        />
      </div>
    </div>
  );
};

export default MyShop;
