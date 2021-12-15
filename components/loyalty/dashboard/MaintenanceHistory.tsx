import { Button, ButtonToolbar } from 'react-bootstrap';
import Link from 'next/link';

const MaintenanceHistory = () => {
  return (
    <div className="box loyalty">
      <div className="box-head flex">
        <h6>Засвар үйлчилгээний түүх</h6>
      </div>
      <div className="box-body">
        <div className="transaction-list">
          <div className="flex transaction-item">
            <span>Оношлогоо</span>
            <strong>2021.12.10</strong>
          </div>
          <div className="flex transaction-item">
            <span>Оношлогоо</span>
            <strong>2021.12.10</strong>
          </div>
          <div className="flex transaction-item">
            <span>Оношлогоо</span>
            <strong>2021.12.10</strong>
          </div>
          <div className="flex transaction-item">
            <span>Оношлогоо</span>
            <strong>2021.12.10</strong>
          </div>
        </div>
        <Link href="/">
          <a className="read-more">Бүгдийг харах</a>
        </Link>
      </div>
    </div>
  );
};

export default MaintenanceHistory;
