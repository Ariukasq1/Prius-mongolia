import react, { useState, useEffect } from 'react';
import { Button, Row, Col, Container, ButtonToolbar } from 'react-bootstrap';
import Layout from '../components/layout/Layout';
import { getPaginatedPosts } from '../lib/posts';
import Link from 'next/link';
import EmptyState from '../components/common/EmptyState';
import dayjs from 'dayjs';
const News = ({ posts, featuredPost }) => {
  const Item = (post) => {
    return (
      <Col md={6} xs={12} lg={4} key={post.id}>
        <div className="item news-item">
          <Link href={`/posts/${post.slug}`}>
            <a>
              <div className="thumbnail" style={{ background: `url(${post.featuredImage.sourceUrl})` }}></div>
              <div className="flex justify-between flex-v-center">
                <span className="post-category">{getLastCategory(post.categories)}</span>
                <time>{dayjs(featured.date).format('MM сарын DD-нд')}</time>
              </div>
              <h5>{post.title}</h5>
            </a>
          </Link>
        </div>
      </Col>
    );
  };

  const smallItem = (post) => {
    return (
      <div className="item news-small-item" key={post.id}>
        <Link href={`/posts/${post.slug}`}>
          <a>
            <Row className="flex flex-v-center">
              <Col>
                <div className="thumbnail" style={{ background: `url(${post.featuredImage.sourceUrl})` }}>
                  <span className="post-category">{getLastCategory(post.categories)}</span>
                </div>
              </Col>
              <Col>
                <h6>{post.title}</h6>
              </Col>
            </Row>
          </a>
        </Link>
      </div>
    );
  };

  const getLastCategory = (categories) => {
    const category = categories && categories.slice(-1);
    return category[0].name;
  };

  const featured = featuredPost.posts[0];
  return (
    <Layout title="Салбарууд">
      <div className="news-page page">
        <Container>
          {posts && posts.length > 0 ? (
            <>
              <Row>
                <Col md={7} sm={12}>
                  {featuredPost && featured ? (
                    <div className="featured-post item">
                      <Link href={`/posts/${featured.slug}`}>
                        <a>
                          <Row>
                            <Col md={6} sm={12}>
                              <div className="thumbnail" style={{ background: `url(${featured.featuredImage.sourceUrl})` }}></div>
                            </Col>
                            <Col md={6} sm={12}>
                              <div className="caption">
                                <span className="post-category">{getLastCategory(featured.categories)}</span>
                                <h6>{featured.title}</h6>
                                <div dangerouslySetInnerHTML={{ __html: featured.excerpt }}></div>
                                <time>{dayjs(featured.date).format('MM сарын DD-нд')}</time>
                              </div>
                            </Col>
                          </Row>
                        </a>
                      </Link>
                    </div>
                  ) : (
                    <EmptyState />
                  )}
                </Col>
                <Col md={5} sm={12}>
                  {posts.map((post) => smallItem(post))}
                </Col>
              </Row>
              <div className="news-list">
                <Row>
                  {posts.map((post) => Item(post))}
                  {posts.map((post) => Item(post))}
                </Row>
              </div>
            </>
          ) : (
            <EmptyState />
          )}
        </Container>
      </div>
    </Layout>
  );
};

export default News;

export async function getStaticProps({ params = {} as any } = {}) {
  const featuredPost = await getPaginatedPosts(params && params.page, 'featured-post', 1);
  const { posts, pagination } = await getPaginatedPosts(params && params.page, 'news', 9);
  return {
    props: {
      posts,
      featuredPost,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
  };
}
