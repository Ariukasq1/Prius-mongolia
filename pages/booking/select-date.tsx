import react, { useState } from 'react';
import { Button, Row, Col, Container, ButtonToolbar, Form } from 'react-bootstrap';
import Layout from '../../components/layout/Layout';
import { getPaginatedPosts } from '../../lib/posts';
import { getPageBySlug } from '../../lib/page';
import Stepper from '../../components/common/Stepper';
import { useRouter } from 'next/router';
import Link from 'next/link';
const SelectDate = ({ posts, page }) => {
  const [map, setMap] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push('/booking/confirm');
  };

  return (
    <Layout title="Засварын төрөл Өдөр сонгох">
      <div className="select-date-page branches-page page">
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
          <Stepper activeStep={2} />
          <div className="select-date">
            <Form>
              <Row>
                <Col md={6} sm={12}>
                  {posts.length > 0 &&
                    posts.map((post) => (
                      <Form.Check key={post.id} type={'radio'} className="box" id={`check-api-radio-${post.id}`}>
                        <Form.Check.Input name="radio-select" type={'radio'} isValid />
                        <Form.Check.Label>
                          {post.featuredImage.sourceUrl && <img src={post.featuredImage.sourceUrl} />}
                          <h6>{post.title}</h6>
                          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                          <Link href={`/posts/${post.slug}`}>
                            <a className="read-more">
                              Дэлгэрэнгүй <i className="fa-solid fa-arrow-right"></i>
                            </a>
                          </Link>
                        </Form.Check.Label>
                      </Form.Check>
                    ))}
                </Col>
                <Col md={6} sm={12}>
                  <div className="box">
                    <h6>Захиалах өдөр цагаа сонгоно уу</h6>
                    <div className="calendar">calendar</div>
                    <ButtonToolbar className="slim full">
                      <Button variant="outline-primary" onClick={() => router.back()}>
                        Буцах
                      </Button>
                      <Button onClick={handleClick} variant="primary">
                        Үргэлжлүүлэх
                      </Button>
                    </ButtonToolbar>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default SelectDate;

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
