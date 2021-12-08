import react, { useState } from 'react';
import { Button, Row, Col, Card, Container, Accordion, ButtonToolbar, useAccordionToggle } from 'react-bootstrap';
import Layout from '../components/layout/Layout';
import { getPaginatedPosts } from '../lib/posts';
import { getPageByID } from '../lib/page';
import EmptyState from '../components/common/EmptyState';
const Career = ({ posts, page }) => {
  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionToggle(eventKey);

    return (
      <div className="accordion-toggle" onClick={decoratedOnClick}>
        {children}
      </div>
    );
  };

  const renderItem = (post) => {
    return (
      <Card>
        <Card.Header>
          <Row className="flex flex-v-center">
            <Col md={6}>
              <CustomToggle eventKey="0">
                <h5>{post.title}</h5>
                <span>
                  <i className="fa-solid fa-location-dot"></i> {post.career.address}
                </span>
                <span>
                  <i className="fa-solid fa-phone"></i> {post.career.number}
                </span>
              </CustomToggle>
            </Col>
            <Col md={6}>
              <div className="actions">
                <ButtonToolbar className="slim">
                  <Button className="transparent" variant="link">
                    Хувaaлцах <i className="fa-brands fa-facebook"></i>
                  </Button>
                  <Button variant="outline-primary">Анкет татах</Button>
                  <Button>Анкет бөглөх</Button>
                </ButtonToolbar>
              </div>
            </Col>
          </Row>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  };

  return (
    <Layout title="Ажлын байр">
      <div className="page career-page">
        <Container>
          <div className="branches-head">
            {page && (
              <div className="branches-page">
                <h5>{page.title}</h5>
                <div dangerouslySetInnerHTML={{ __html: page.content }} />
              </div>
            )}
            <div className="flex branches-action">
              <h6>Нийт {posts.length} ажлын байр байна.</h6>
            </div>
          </div>
          <div className="branches-body">
            <Accordion>{posts && posts.length ? posts.map((post) => renderItem(post)) : <EmptyState title="Хоосон байна." />}</Accordion>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Career;

export async function getStaticProps({ params = {} as any } = {}) {
  const { posts, pagination } = await getPaginatedPosts(params && params.page, 2);
  const { page } = await getPageByID(12);
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
