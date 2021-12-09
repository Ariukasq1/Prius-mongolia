import react, { useImperativeHandle, useState } from 'react';
import { Button, Row, Col, Container, ButtonToolbar } from 'react-bootstrap';
import Layout from '../../components/layout/Layout';
import { getPaginatedPosts } from '../../lib/posts';
import { getPageBySlug } from '../../lib/page';
import EmptyState from '../../components/common/EmptyState';
import Stepper from '../../components/common/Stepper';
import { useRouter } from 'next/router';
const SelectBranch = ({ posts, page }) => {
  const [map, setMap] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push('/booking/select-date');
  };
  const renderBranch = (post) => {
    return (
      <Col lg={3} md={4} sm={6} xs={12}>
        <div className="branch-grid branch" key={post.id}>
          <div className="thumbnail branch-thumbnail" style={{ background: `url(${post.featuredImage.sourceUrl})` }}></div>
          <div className="branch-contact">
            <h6>Хаяг: </h6>
            <span>{post.branches.address}</span>
            <h6>Цагийн хуваарь: </h6>
            <span>
              {post.branches.workingDays} {post.branches.openingHour} - {post.branches.closingHour}
            </span>
          </div>
          <ButtonToolbar className="slim">
            <Button className="plain" onClick={handleClick}>
              Цаг авах
            </Button>
          </ButtonToolbar>
        </div>
      </Col>
    );
  };

  return (
    <Layout title="Салбар сонгох">
      <div className="select-branch-page branches-page page">
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
              <Col xs={12} md={5}>
                <ButtonToolbar>
                  <Button variant={map ? 'outline-primary' : 'primary'} onClick={() => setMap(false)}>
                    <i className="fa-solid fa-list" /> Жагсаалтаар харах
                  </Button>
                  <Button onClick={() => setMap(true)} variant={map ? 'primary' : 'outline-primary'}>
                    <i className="fa-solid fa-map" /> Газрын зураг
                  </Button>
                </ButtonToolbar>
              </Col>
            </Row>
          </div>
          <Stepper activeStep={1} />
          <div className="branches-body">
            {map ? 'google map' : <Row>{posts && posts.length ? posts.map((post) => renderBranch(post)) : <EmptyState title="Хоосон байна." />}</Row>}
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default SelectBranch;

export async function getStaticProps({ params = {} as any } = {}) {
  const { posts, pagination } = await getPaginatedPosts(params && params.page, 'branches');
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
