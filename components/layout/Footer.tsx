import react from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} lg={3} md={6}>
            <Image className="footer-logo" alt="logo" src="/images/logo.png" width={215} height={85} />
            <div className="contact">
              <ul>
                <li className="flex flex-v-center">
                  <i className="fa-solid fa-location-dot"></i> <span>БГД -16 р хороо Туулын-17, “Prius center” төв байр</span>
                </li>
                <li className="flex flex-v-center">
                  <i className="fa-solid fa-envelope-open"></i> <a href="mail:info@priuscenter.mn">info@priuscenter.mn</a>
                </li>
                <li className="flex flex-v-center">
                  <i className="fa-solid fa-globe"></i>{' '}
                  <a href="https://www.priuscenter.mn" target="_blank">
                    www.priuscenter.mn
                  </a>
                </li>
              </ul>
              <div className="social flex">
                <a target="_blank" href="https://fb.com">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a target="_blank" href="https://fb.com">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a target="_blank" href="https://fb.com">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a target="_blank" href="https://fb.com">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col xs={6} lg={3} md={6}>
            <div className="footer-menu">
              <h5>Бидний тухай</h5>
              <ul>
                <li>
                  <Link href="/intro">Танилцуулга</Link>
                </li>
                <li>
                  <Link href="/intro">Танилцуулга</Link>
                </li>
                <li>
                  <Link href="/intro">Танилцуулга</Link>
                </li>
                <li>
                  <Link href="/about/branches">Салбарууд</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={6} lg={3} md={6}>
            <div className="footer-menu">
              <h5>Бидний тухай</h5>
              <ul>
                <li>
                  <Link href="/intro">Танилцуулга</Link>
                </li>
                <li>
                  <Link href="/intro">Танилцуулга</Link>
                </li>
                <li>
                  <Link href="/intro">Танилцуулга</Link>
                </li>
                <li>
                  <Link href="/intro">Танилцуулга</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={6} lg={3} md={6}>
            <div className="footer-menu">
              <h5>Бидний тухай</h5>
              <ul>
                <li>
                  <Link href="/about/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/intro">Танилцуулга</Link>
                </li>
                <li>
                  <Link href="/intro">Танилцуулга</Link>
                </li>
                <li>
                  <Link href="/intro">Танилцуулга</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="copyright">
        <span>Copyright 2021 Prius Center</span>
      </div>
    </footer>
  );
};

export default Footer;
