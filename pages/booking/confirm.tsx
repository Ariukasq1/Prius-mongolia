import react, { useState } from 'react';
import { Button, Row, Col, Container, ButtonToolbar, Form } from 'react-bootstrap';
import Layout from '../../components/layout/Layout';
import { getPaginatedPosts } from '../../lib/posts';
import { getPageBySlug } from '../../lib/page';
import Stepper from '../../components/common/Stepper';
import Alert from '../../components/common/Alert';
import { useRouter } from 'next/router';
import Modal from '../../components/common/Modal';
import Link from 'next/link';
const Confirm = ({ posts, page }) => {
  const [modalShow, setModalShow] = useState(false);
  const router = useRouter();

  return (
    <Layout title="Засварын төрөл Өдөр сонгох">
      <div className="confirm-page branches-page page">
        <Container>
          <div className="branches-head">
            <Row className=" flex flex-v-center">
              <Col xs={12} md={7}>
                {page && (
                  <>
                    <h5>Засвар үйлчилгээний цаг авах</h5>
                    <p>Та өөрт хамгийн ойр салбараа сонгон үйлчлүүлэх боломжтой</p>
                    {/* <div dangerouslySetInnerHTML={{ __html: page.content }} /> */}
                  </>
                )}
              </Col>
            </Row>
          </div>
          <Stepper activeStep={3} />
          <div className="confirm box big-box">
            <h5>Баталгаажуулах</h5>
            <Alert
              type="warning"
              text="Та манай цахим хуудсанд бүртгүүлж хэрэглэгч болсноор засвар үйлчилгээний цаг захиалах бүртээ лояалт оноо цуглуулж, цуглуулсан оноогоороо бэлэг авах, хөнгөлөлт эдлэх гэх мэт маш олон урамшуулалд хамрагдах боломжтой. Та бүртгүүлэх бол энд дарна уу"
            />
            <Form>
              <Row>
                <Col md={8} sm={12}></Col>
                <Col md={4} sm={12}>
                  <div className="box active info">
                    <div>
                      <strong>Салбар:</strong>
                      <span>Гандан 2 салбар</span>
                    </div>
                    <div>
                      <strong>Төрөл:</strong>
                      <span>Засвар</span>
                    </div>
                    <div>
                      <strong>Сервис:</strong>
                      <span>Энгийн засьар</span>
                    </div>
                    <div>
                      <strong>Цаг:</strong>
                      <span>2021.08.30 14:00-16:00</span>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Цаг захиалгийг зөвшөөрч байна." />
                    </Form.Group>
                  </div>
                </Col>
              </Row>
            </Form>
            <hr />
            <ButtonToolbar className="full center">
              <Button variant="outline-primary" onClick={() => router.back()}>
                Буцах
              </Button>
              <Button onClick={() => setModalShow(!modalShow)} variant="primary">
                Батлах
              </Button>
            </ButtonToolbar>
            <Modal
              content={() => (
                <div className="success-modal">
                  <div className="success-icon">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p>Таны засвар үйлчилгээний цаг амжилттай захиалагдлаа</p>
                  <Button className="plain bold" onClick={() => setModalShow(!modalShow)}>
                    Амжилттай
                  </Button>
                </div>
              )}
              onHide={() => setModalShow(!modalShow)}
              show={modalShow}
              rounded={true}
              size="sm"
            />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Confirm;

export async function getStaticProps({ params = {} as any } = {}) {
  const { posts, pagination } = await getPaginatedPosts(params && params.page, 'maintenance-booking');
  const { page } = await getPageBySlug('branches');
  return {
    props: {
      posts,
      page,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
  };
}
