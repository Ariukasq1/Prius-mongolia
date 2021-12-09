import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

type Props = {
  data: any;
};
const Banner = ({ data }) => {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col xs={12} lg={8}>
            <div className="card main" style={{ backgroundImage: `url(${data[0].featuredImage.sourceUrl})` }}>
              <div className="caption">
                <h4>{data[0].title}</h4>
                <div dangerouslySetInnerHTML={{ __html: data[0].content }} />
              </div>
              <Link href={data[0].banner.customLink ? data[0].banner.customLink : `posts/${data[0].slug}`}>
                <a className="read-more">Дэлгэрэнгүй</a>
              </Link>
            </div>
            <Row>
              <Col xs={6} sm={6} lg={6}>
                <div className="card" style={{ backgroundImage: `url(${data[2].featuredImage.sourceUrl})` }}>
                  <div className="caption">
                    <h4>{data[2].title}</h4>
                    <div dangerouslySetInnerHTML={{ __html: data[2].content }} />
                  </div>
                  <Link href={data[2].banner.customLink ? data[2].banner.customLink : `posts/${data[2].slug}`}>
                    <a className="read-more">
                      <i className="fa-solid fa-angle-right"></i>
                    </a>
                  </Link>
                </div>
              </Col>
              <Col xs={6} sm={6} lg={6}>
                <div className="card" style={{ backgroundImage: `url(${data[3].featuredImage.sourceUrl})` }}>
                  <div className="caption">{/* <h4>{data[3].title}</h4> */}</div>
                  <Link href={data[3].banner.customLink ? data[3].banner.customLink : `posts/${data[3].slug}`}>
                    <a className="read-more white">
                      <i className="fa-solid fa-angle-right"></i>
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={4}>
            <div className="card vertical" style={{ backgroundImage: `url(${data[1].featuredImage.sourceUrl})` }}>
              <div className="caption">
                <h4>{data[1].title}</h4>
                <div dangerouslySetInnerHTML={{ __html: data[1].content }} />
              </div>
              <Link href={data[1].banner.customLink ? data[1].banner.customLink : `posts/${data[1].slug}`}>
                <a className="read-more white">
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
