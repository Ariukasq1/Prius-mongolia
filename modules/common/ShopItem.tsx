import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
export const ShopItem = (props) => {
  //   const [userItem] = useState(true);
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
