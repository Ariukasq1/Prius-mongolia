import Link from 'next/link';
import { ShopItem } from './common/ShopItem';
import { Row, Col } from 'react-bootstrap';
const MyAds = () => {
  return (
    <div className="my-ads">
      <div className="products-row">
        <div className="products-head flex">
          <h5>Энгийн зар</h5>
          <Link href="/all">
            <a className="see-all">
              Бүх зар харах <i className="fa-solid fa-arrow-right"></i>
            </a>
          </Link>
        </div>
        <div className="products">
          <Row>
            <Col md={3} sm={4} lg={2}>
              <ShopItem commonItem />
            </Col>
            <Col md={3} sm={4} lg={2}>
              <ShopItem commonItem />
            </Col>
            <Col md={3} sm={4} lg={2}>
              <ShopItem commonItem />
            </Col>
            <Col md={3} sm={4} lg={2}>
              <ShopItem commonItem />
            </Col>
            <Col md={3} sm={4} lg={2}>
              <ShopItem commonItem />
            </Col>
            <Col md={3} sm={4} lg={2}>
              <ShopItem commonItem />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default MyAds;
