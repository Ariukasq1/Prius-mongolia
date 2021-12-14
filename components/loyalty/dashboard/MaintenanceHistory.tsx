import { Button, ButtonToolbar } from 'react-bootstrap';
import Link from 'next/link';

const MaintenanceHistory = () => {
  return (
    <div className="box loyalty">
      <div className="box-head flex">
        <h6>Миний Лояалти</h6>
        <ButtonToolbar className="slim">
          <Button variant="outline-primary">Бэлэглэх</Button>
          <Button variant="outline-primary">Хандивлах</Button>
        </ButtonToolbar>
      </div>
      <div className="box-body">
        <div className="loyalty-point">
          <h1>250</h1>
        </div>
        <h6>
          Миний цуглуулсан лояалти
          <Link href="/">
            <a>
              {' '}
              <i>Түүх харах</i>
            </a>
          </Link>
        </h6>
        <div className="presents-by-point flex">
          <div className="present">
            <div>
              <img src="/icons/present.png" />
              <span>100</span>
            </div>
          </div>
          <div className="present">
            <div>
              <img src="/icons/present.png" />
              <span>150</span>
            </div>
          </div>
          <div className="present">
            <div>
              <img src="/icons/present.png" />
              <span>200</span>
            </div>
          </div>
          <div className="present present-active">
            <div>
              <img src="/icons/present-active.png" />
              <span>250</span>
            </div>
          </div>
          <div className="present">
            <div>
              {' '}
              <img src="/icons/present.png" />
              <span>300</span>
            </div>
          </div>
          <div className="present">
            <div>
              <img src="/icons/present.png" />
              <span>350</span>
            </div>
          </div>
          <div className="present">
            <div>
              <img src="/icons/present.png" />
              <span>400</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceHistory;
