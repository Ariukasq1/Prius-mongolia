import { Button, ButtonToolbar } from 'react-bootstrap';
import Link from 'next/link';
import Alert from '../../common/Alert';

const MyCar = () => {
  return (
    <div className="box loyalty">
      <div className="box-head flex">
        <h6>Миний машин</h6>
        <ButtonToolbar className="slim">
          <Button variant="primary">Машин нэмэх</Button>
        </ButtonToolbar>
      </div>
      <div className="box-body">
        <div className="car-card flex">
          <img src="/images/car.png" alt="" />
          <div className="car-details">
            <p>
              Явсан км: <strong>114,000</strong>
            </p>
            <p>
              Явсан км: <strong>114,000</strong>
            </p>
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
        <div className="car-card flex">
          <img src="/images/car.png" alt="" />
          <div className="car-details">
            <p>
              Явсан км: <strong>114,000</strong>
            </p>
            <p>
              Явсан км: <strong>114,000</strong>
            </p>
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
          text="Засвар үйлчилгээ болон сэлбэгтэй холбоотой зар хайх, захиалга өгөхөд хялбар боллоо. Та өөрийн автомашинаа бүртгүүлсэнээр зөвхөн таны автомашинд тохирох сэлбэг, засвар үйлчилгээний заруудыг харах боломжтой"
        />
      </div>
    </div>
  );
};

export default MyCar;
