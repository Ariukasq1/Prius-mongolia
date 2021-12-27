import React, { useState } from 'react';
import { Button, ButtonToolbar, Col, Row } from 'react-bootstrap';
import { InputNumber } from './InputNumber';
import Modal from './Modal';
export const ShopItem = (props) => {
  //   const [userItem] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  if (props.commonItem) {
    return (
      <div className="shop-item my-item common-item">
        <div className="thumbnail">
          <div className="product-thumbnail thumbnail" style={{ background: `url(/images/product.png)` }}></div>
        </div>
        <div className="price">
          <span className="main">Үнэ: 18,400₮</span>
        </div>
        <h6 className="title">Агергат мотор 30</h6>
        <span className="desc">Be the first to review “Агергат мотор 30”</span>
        <ButtonToolbar className="slim">
          <Button variant="outline-primary" className="w100 edit">
            Дугаар харах
          </Button>
        </ButtonToolbar>
      </div>
    );
  }

  if (props.myItem) {
    return (
      <div className="shop-item my-item">
        <div className="thumbnail">
          <div className="product-thumbnail small thumbnail" style={{ background: `url(/images/product.png)` }}></div>
        </div>
        <div className="price">
          <span className="main">Үнэ: 18,400₮</span>
        </div>
        <h6 className="title">Агергат мотор 30</h6>
        <span className="desc">Be the first to review “Агергат мотор 30”</span>
        <ButtonToolbar className="slim">
          <Button variant="outline-primary" className="edit">
            <i className="fa-regular fa-pen-to-square"></i> засах
          </Button>
          <Button className="trash">
            <i className="fa-solid fa-trash-can"></i>
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
  if (props.userItem) {
    return (
      <div className="shop-item user-item">
        <div className="thumbnail">
          <span className="dark ribbon">VIP</span>
          <div className="product-thumbnail thumbnail" style={{ background: `url(/images/product.png)` }}></div>
        </div>
        <div className="price">
          <span className="main">Үнэ: 18,400₮</span>
        </div>
        <h6 className="title">Агергат мотор 30</h6>
        <span className="desc">Be the first to review “Агергат мотор 30”</span>
        <div className="action">
          <Button className="stock">Дугаар харах</Button>
        </div>
      </div>
    );
  }
  return (
    <div className="shop-item">
      <div className="thumbnail" onClick={() => setModalShow(!modalShow)}>
        <span className="green ribbon">Pruis Center</span>
        <div className="product-thumbnail thumbnail" style={{ background: `url(/images/product.png)` }}></div>
      </div>
      <div className="price">
        <span className="main">Үнэ: 18,400₮</span>
        <span className="old">25,000₮</span>
        <span className="sale-percentage">35%</span>
      </div>
      <h6 className="title" onClick={() => setModalShow(!modalShow)}>
        Агергат мотор 30
      </h6>
      <span className="desc">Be the first to review “Агергат мотор 30”</span>
      <div className="action">
        <InputNumber />
        <Button className="stock" onClick={() => setModalShow(!modalShow)}>
          Үлдэгдэл харах
        </Button>
        <Button className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </Button>
      </div>
      <Modal
        content={() => (
          <div className="product-detail-modal shop-item">
            <Row>
              <Col lg={8} md={12}>
                <div className="images">
                  <div className="product-thumbnail thumbnail" style={{ background: `url(/images/product.png)` }}></div>
                </div>
              </Col>
              <Col lg={4} md={12}>
                <div className="details">
                  <div className="price">
                    <span className="main">Үнэ: 18,400₮</span>
                    <span className="old">25,000₮</span>
                    <span className="sale-percentage">35%</span>
                  </div>
                  <span className="desc">Be the first to review “Агергат мотор 30”</span>
                </div>
              </Col>
            </Row>
          </div>
        )}
        onHide={() => setModalShow(!modalShow)}
        show={modalShow}
        title="Агергат мотор 30"
        rounded={true}
        size="lg"
      />
    </div>
  );
};
