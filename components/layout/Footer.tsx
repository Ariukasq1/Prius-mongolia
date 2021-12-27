import react from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  aboutMenu: any;
  footerMenu: any;
  linkMenu: any;
  contactData: any;
};

const Footer = ({ aboutMenu, footerMenu, linkMenu, contactData }: Props) => {
  const { address, email, facebook } = contactData && contactData.contact || {} as any;

  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} lg={3} md={6}>
            <Link href="/">
              <Image className="footer-logo" alt="logo" src="/images/logo.png" width={215} height={85} />
            </Link>
            {contactData && (
              <div className="contact">
                <ul>
                  <li className="flex flex-v-center">
                    <i className="fa-solid fa-location-dot"></i> <span>{address}</span>
                  </li>
                  <li className="flex flex-v-center">
                    <i className="fa-solid fa-envelope-open"></i> <a href={`mail:${email}`}>{email}</a>
                  </li>
                  <li className="flex flex-v-center">
                    <i className="fa-solid fa-globe"></i>{' '}
                    <a href="https://www.priuscenter.mn" target="_blank">
                      www.priuscenter.mn
                    </a>
                  </li>
                </ul>
                <div className="social flex">
                  {facebook && (
                    <a target="_blank" href={facebook}>
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  )}
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
            )}
          </Col>
          <Col xs={6} lg={3} md={6}>
            {aboutMenu && (
              <div className="footer-menu">
                <h5>{aboutMenu.name}</h5>
                <ul>
                  {(aboutMenu.menuItems || []).length !== 0 &&
                    aboutMenu.menuItems.map((item) => (
                      <li key={item.id}>
                        <Link href={item.path}>{item.label}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </Col>
          <Col xs={6} lg={3} md={6}>
            {footerMenu && (
              <div className="footer-menu">
                <h5>{footerMenu.name}</h5>
                <ul>
                  {(footerMenu.menuItems || []).length !== 0 &&
                    footerMenu.menuItems.map((item) => (
                      <li key={item.id}>
                        <Link href={item.path}>{item.label}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </Col>
          <Col xs={6} lg={3} md={6}>
            {linkMenu && (
              <div className="footer-menu">
                <h5>{linkMenu.name}</h5>
                <ul>
                  {(linkMenu.menuItems || []).length !== 0 &&
                    linkMenu.menuItems.map((item) => (
                      <li key={item.id}>
                        <Link href={item.path}>{item.label}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            )}
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
