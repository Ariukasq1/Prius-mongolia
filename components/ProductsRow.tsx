import react, { useState } from 'react';
import Image from 'next/image';
import { Button, Row, Col, Container } from 'react-bootstrap';
import Link from 'next/link';
import { ShopItem } from './common/ShopItem';
const ProductsRow = (props) => {
  const [user, setUser] = useState(true);
  return (
    <div className="products-row">
      <Container>
        <div className="products-head flex">
          <h5>{props.title}</h5>
          <Link href="/all">
            <a className="see-all">
              Бүгдийг харах <i className="fa-solid fa-arrow-right"></i>
            </a>
          </Link>
        </div>
        <div className="products">
          <Row>
            <Col xs={12} sm={6} md={4} lg={3}>
              <ShopItem userItem={props.type === 'user' ? true : false} />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <ShopItem userItem={props.type === 'user' ? true : false} />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <ShopItem userItem={props.type === 'user' ? true : false} />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <ShopItem userItem={props.type === 'user' ? true : false} />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <ShopItem userItem={props.type === 'user' ? true : false} />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <ShopItem userItem={props.type === 'user' ? true : false} />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <ShopItem userItem={props.type === 'user' ? true : false} />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <ShopItem userItem={props.type === 'user' ? true : false} />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ProductsRow;
