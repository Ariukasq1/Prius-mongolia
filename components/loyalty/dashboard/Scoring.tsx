import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
const Scoring = () => {
  return (
    <Row>
      <Col lg={3} md={6} xs={12}>
        <Link href="/">
          <div className="box scoring-box">
            <div className="icon">
              <i className="fa-regular fa-copy"></i>
            </div>
            <div className="main">
              <h2>5</h2>
              <p>NPS судалгаанд хамрагдах</p>
            </div>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </Link>
      </Col>
      <Col lg={3} md={6} xs={12}>
        <Link href="/">
          <div className="box scoring-box">
            <div className="icon">
              <i className="fa-solid fa-stopwatch"></i>
            </div>
            <div className="main">
              <h2>5</h2>
              <p>Засвар үйлчилгээний цаг захиалга</p>
            </div>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </Link>
      </Col>
      <Col lg={3} md={6} xs={12}>
        <Link href="/">
          <div className="box scoring-box">
            <div className="icon">
              <i className="fa-solid fa-file-medical"></i>
            </div>
            <div className="main">
              <h2>50</h2>
              <p>Засвар үйлчилгээний цаг захиалга</p>
            </div>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </Link>
      </Col>
      <Col lg={3} md={6} xs={12}>
        <Link href="/">
          <div className="box scoring-box scoring-more">
            <div className="icon">
              <img src="/images/icons/hand.svg" alt="hand" />
            </div>
            <div className="main">
              <p>
                Оноо цуглуулах <br /> боломжууд
              </p>
            </div>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </Link>
      </Col>
    </Row>
  );
};

export default Scoring;
