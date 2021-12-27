import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/layout/Layout';
export default function Payment({ menus, contactData }) {
  const cartItem = () => {
    return (
      <div className="box cart-item flex">
        <img src="/images/car.png" />
        <div className="details">
          <h6>Зуны дугуй</h6>
          <span>Үнэ: 500,000₮</span>
          <div className="count"></div>
          <i className="fa-solid fa-trash-can"></i>
        </div>
      </div>
    );
  };

  return (
    <Layout menus={menus} contactData={contactData} title="Төлбөр">
      <div className="plain-page ">
        <Container>
          <div className="box payment-page">
            <Row>
              <Col md={6} xs={12} lg={4}>
                <div className="my-cart">
                  <h6>Миний сагс</h6>
                  <div className="cart-list">
                    {cartItem()}
                    {cartItem()}
                    {cartItem()}
                    {cartItem()}
                    {cartItem()}
                    {cartItem()}
                    {cartItem()}
                    {cartItem()}
                    {cartItem()}
                  </div>
                </div>
              </Col>
              <Col md={6} xs={12} lg={4}>
                <div className="my-payment">
                  <h6>Төлбөр төлөх</h6>
                  <div className="tax flex space-between">
                    <span>Нийт</span>
                    <span>1,500,000₮</span>
                  </div>
                  <div className="total flex space-between">
                    <span>Нийт</span>
                    <span>1,500,000₮</span>
                  </div>
                  <div className="payment-options">payment options</div>
                </div>
                <div className="my-payment">
                  <h6>E-barimt</h6>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
