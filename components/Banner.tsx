import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

type Props = {};
class Banner extends React.Component<Props> {
  render() {
    return (
      <div className="banner">
        <Container>
          <Row>
            <Col xs={12} lg={8}>
              <div className="card main">
                <div className="caption">
                  <h4>Засвар үйлчилгээний захиалга</h4>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                </div>
                <Link href="/">
                  <a className="read-more">Дэлгэрэнгүй</a>
                </Link>
              </div>
              <Row>
                <Col xs={6} sm={6} lg={6}>
                  <div className="card">
                    <div className="caption">
                      <h4>Лояалти хөтөлбөр</h4>
                    </div>
                    <Link href="/">
                      <a className="read-more">
                        <i className="fa-solid fa-angle-right"></i>
                      </a>
                    </Link>
                  </div>
                </Col>
                <Col xs={6} sm={6} lg={6}>
                  <div className="card">
                    <div className="caption">
                      <h4>Лояалти хөтөлбөр</h4>
                    </div>
                    <Link href="/">
                      <a className="read-more">
                        <i className="fa-solid fa-angle-right"></i>
                      </a>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={4}>
              <div className="card vertical">
                <div className="caption">
                  <h4>Лояалти хөтөлбөр</h4>
                </div>
                <Link href="/">
                  <a className="read-more">
                    <i className="fa-solid fa-angle-right"></i>
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Banner;
