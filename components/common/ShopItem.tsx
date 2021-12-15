import Image from 'next/image';
import React, { useState } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
export const ShopItem = (props) => {
  //   const [userItem] = useState(true);

  if (props.commonItem) {
    return (
      <div className="shop-item my-item common-item">
        <div className="thumbnail">
          <Image className="product-thumbnail" width={'auto'} height={100} src="/images/product.png" />
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
          <Image className="product-thumbnail" width={'auto'} height={100} src="/images/product.png" />
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
          <Image className="product-thumbnail" width={'auto'} height={200} src="/images/product.png" />
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
      <div className="thumbnail">
        <span className="green ribbon">Pruis Center</span>
        <Image className="product-thumbnail" width={'auto'} height={200} src="/images/product.png" />
      </div>
      <div className="price">
        <span className="main">Үнэ: 18,400₮</span>
        <span className="old">25,000₮</span>
        <span className="sale-percentage">35%</span>
      </div>
      <h6 className="title">Агергат мотор 30</h6>
      <span className="desc">Be the first to review “Агергат мотор 30”</span>
      <div className="action">
        <div className="quantity">
          <input type="number" />
        </div>
        <Button className="stock">Үлдэгдэл харах</Button>
        <Button className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </Button>
      </div>
    </div>
  );
};
