import react, { useState } from 'react';
import Image from 'next/image';
import { Button, Row, Col, Card, Container, Accordion, ButtonToolbar, useAccordionToggle } from 'react-bootstrap';
// import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
const Faq = (props) => {
  const [open, setOpen] = useState(false);
  console.log(open);

  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionToggle(eventKey);

    return (
      <div className="accordion-toggle" onClick={decoratedOnClick}>
        {children}
      </div>
    );
  };

  const renderItem = () => {
    return (
      <Card>
        <Card.Header>
          <Row>
            <Col md={6}>
              <CustomToggle eventKey="0">
                <h5>Үйлчилгээний ажилтан ажилд авна</h5>
                <span>
                  <i className="fa-solid fa-location-dot"></i> 95020011, 95020033
                </span>
                <span>
                  <i className="fa-solid fa-phone"></i> 95020011, 95020033
                </span>
              </CustomToggle>
            </Col>
            <Col md={6}>
              <div className="actions">
                <ButtonToolbar>
                  <Button variant="light">
                    Share <i className="fa-brands fa-facebook"></i>
                  </Button>
                  <Button variant="outline-primary">Анкет татах</Button>
                  <Button>Анкет бөглөх</Button>
                </ButtonToolbar>
              </div>
            </Col>
          </Row>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  };

  return (
    <Layout>
      <div className="page career-page">
        <Container>
          <div className="branches-head">
            <h5>FAQ</h5>
            <p>
              Өдгөө бид 7 салбар 220 гаруй ажилчидтайгаар Улаанбаатар хотын 5 дүүрэгт үйл ажиллагаагаа эрхлэн явуулж байгаагаас гадна дуудлагын засвар
              үйлчилгээ нэвтрүүлж{' '}
            </p>
          </div>
          <div className="branches-body">
            <Accordion>
              {renderItem()}
              {renderItem()}
              {renderItem()}
              {renderItem()}
            </Accordion>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Faq;
