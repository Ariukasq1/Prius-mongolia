import { Button, ButtonToolbar } from 'react-bootstrap';
import Link from 'next/link';

const Presents = () => {
  const present = () => {
    return (
      <div className="present-item">
        <h6>Бэлэг 1</h6>
        <img src="/images/present.png" alt="" />
        <h6>150 оноо</h6>
      </div>
    );
  };

  const presentDisabled = () => {
    return (
      <div className="present-item disabled">
        <h6>Бэлэг 1</h6>
        <img src="/images/present.png" alt="" />
        <h6>150 оноо</h6>
      </div>
    );
  };
  return (
    <div className="box">
      <div className="presents-list flex">
        {present()}
        {present()}
        {present()}
        {present()}
        {presentDisabled()}
        {presentDisabled()}
        {presentDisabled()}
      </div>
    </div>
  );
};

export default Presents;
