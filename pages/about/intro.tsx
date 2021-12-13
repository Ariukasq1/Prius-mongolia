import React from 'react';
import { getPageBySlug, getPagesByParent } from '../../lib/page';
import Layout from '../../components/layout/Layout';
import { Container, Row, Col } from 'react-bootstrap';
import { getPaginatedPosts } from '../../lib/posts';
import Slider from 'react-slick';

export default function Intro({ page, posts, pages }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Layout title={page.title}>
      <div className="plain-page intro">
        <Slider {...settings}>
          {posts &&
            posts.length > 0 &&
            posts.map((post) => (
              <div key={post.key} className="item">
                <div className="thumbnail" style={{ background: `url(${post.featuredImage.sourceUrl})` }}>
                  <Container>
                    <div className="caption">
                      <h3>{post.title}</h3>
                      <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                  </Container>
                </div>
              </div>
            ))}
        </Slider>
        <Container>
          <div className="about-pages">
            <Row>
              {pages &&
                pages.length > 0 &&
                pages.map((page) => (
                  <Col key={page.id} lg={3} md={6} xs={12}>
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <div>
                            {page.featuredImage && <img src={page.featuredImage.sourceUrl} alt="card-img" />}
                            <h6>{page.title}</h6>
                          </div>
                        </div>
                        <div className="flip-card-back">
                          <div className="content" dangerouslySetInnerHTML={{ __html: page.content }} />
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>
          </div>
        </Container>
        <div className="about-page">
          <Container>{page && <div className="content" dangerouslySetInnerHTML={{ __html: page.content }} />}</Container>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params = {} as any } = {}) {
  const { page } = await getPageBySlug('about-us');
  const { posts, pagination } = await getPaginatedPosts(params && params.page, 'about-slider', 6);
  const { pages } = await getPagesByParent('85');
  return {
    props: {
      page,
      posts,
      pages,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
  };
}
