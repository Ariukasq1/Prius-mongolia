import Link from 'next/link';
import { ShopItem } from '../../common/ShopItem';
import { Row, Col } from 'react-bootstrap';
const MyAds = () => {
  return (
    <div className="my-ads">
      <div className="products-row">
        <div className="products-head flex">
          <h6>Миний оруулсан зар</h6>
          <Link href="/all">
            <a className="see-all">
              Бүгдийг харах <i className="fa-solid fa-arrow-right"></i>
            </a>
          </Link>
        </div>
        <div className="products">
          <Row>
            <Col md={3} sm={4} lg={2}>
              <div className="create-ad">
                <h6>
                  <i className="fa-solid fa-plus"></i> Зар нэмэх
                </h6>
              </div>
            </Col>
            <Col md={3} sm={4} lg={2}>
              <ShopItem myItem />
            </Col>
            <Col md={3} sm={4} lg={2}>
              <ShopItem myItem />
            </Col>
            <Col md={3} sm={4} lg={2}>
              <ShopItem myItem />
            </Col>
            <Col md={3} sm={4} lg={2}>
              <ShopItem myItem />
            </Col>
            <Col md={3} sm={4} lg={2}>
              <ShopItem myItem />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default MyAds;
