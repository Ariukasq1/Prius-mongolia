import { Button, ButtonToolbar, Col, Row } from 'react-bootstrap';
import Link from 'next/link';

const TransactionHistory = () => {
  const transactionItem = () => {
    return (
      <div className="flex transaction-item">
        <span>Оношлогоо</span>
        <strong>10</strong>
        <span>2021.12.10</span>
      </div>
    );
  };
  return (
    <div className="box transaction-history">
      <div className="box-head flex">
        <h6>Гүйлгээний түүх</h6>
        <ButtonToolbar className="slim">
          <Button variant="outline-primary">
            <i className="fa-solid fa-calendar-days"></i>
          </Button>
          <Button variant="outline-primary">Улирал</Button>
          <Button variant="primary">7 хоног</Button>
          <Button variant="outline-primary">Сар</Button>
        </ButtonToolbar>
      </div>
      <div className="box-body">
        <Row>
          <Col md={6} sm={12}>
            <div className="chart"></div>
          </Col>
          <Col md={6} sm={12}>
            <div className="transaction-head flex">
              <span>Нэр төрөл</span>
              <span>Цуглуулсан оноо</span>
              <span>Огноо</span>
            </div>
            <div className="transaction-list">
              {transactionItem()}
              {transactionItem()}
              {transactionItem()}
              {transactionItem()}
              {transactionItem()}
              {transactionItem()}
              {transactionItem()}
              {transactionItem()}
              {transactionItem()}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TransactionHistory;
