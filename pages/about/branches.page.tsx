import react, { useState, useEffect } from 'react';
import { Button, Row, Col, Container, ButtonToolbar } from 'react-bootstrap';
import Layout from '../../components/layout/Layout';
import { getPaginatedPosts } from '../../lib/posts';
import { getPageBySlug } from '../../lib/page';
import EmptyState from '../../components/common/EmptyState';

const Branches = ({ posts, page, menus, contactData }) => {
  const [map, setMap] = useState(false);

  const getImages = (html) => {
    const imgTags = html.match(/<img [^>]*src="[^"]*"[^>]*>/gm).map((x) => x.replace(/.*src="([^"]*)".*/, '$1'));
    return imgTags.map((img) => <img src={img} />);
  };

  const renderBranch = (post) => {
    const betweenHours = () => {
      const open = post.branches.openingHour;
      const close = post.branches.closingHour;
      const start = open.slice(0, -3) * 60 + parseInt(open.slice(-2));
      const end = close.slice(0, -3) * 60 + parseInt(close.slice(-2));
      const date = new Date();
      const now = date.getHours() * 60 + date.getMinutes();

      if (start <= now && now <= end) {
        return <span className="status open">Нээлттэй</span>;
      } else {
        return <span className="status closed">Хаалттай</span>;
      }
    };

    return (
      <div className="branch" key={post.id}>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <div className="thumbnail branch-thumbnail" style={{ background: `url(${post.featuredImage.sourceUrl})` }}></div>
          </Col>
          <Col xs={12} sm={6} lg={6}>
            <div className="branch-content">
              <h6>{post.title}</h6>
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
              <div className="images">{post.branches.images && getImages(post.branches.images)}</div>
            </div>
          </Col>
          <Col xs={12} sm={12} lg={3} className="border-left">
            <div className="branch-contact">
              <h6>Хаяг: </h6>
              <span>{post.branches.address}</span>
              <h6>Цагийн хуваарь: </h6>
              <span>
                {post.branches.workingDays} {post.branches.openingHour} - {post.branches.closingHour}
              </span>
              {post.branches.openingHour && post.branches.closingHour && betweenHours()}
              <div className="social flex">
                {post.branches.facebook && (
                  <a target="_blank" href={post.branches.facebook}>
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                )}
                {post.branches.instagram && (
                  <a target="_blank" href={post.branches.instagram}>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <Layout contactData={contactData} menus={menus} title="Салбарууд">
      <div className="branches-page page">
        <Container>
          <div className="branches-head">
            <Row className=" flex flex-v-center">
              <Col xs={12} md={7}>
                {page && (
                  <>
                    <h5>{page.title}</h5>
                    <div dangerouslySetInnerHTML={{ __html: page.content }} />
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
          <div className="branches-body">
            {map ? 'Google map' : posts && posts.length ? posts.map((post) => renderBranch(post)) : <EmptyState title="Хоосон байна." />}
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Branches;

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
