import React from 'react';
import { getAllPosts, getPostBySlug } from '../../lib/posts';
import Layout from '../../components/layout/Layout';
import { Container } from 'react-bootstrap';

export default function Index({ contactData, post, menus }) {
  if (!post || post.length === 0) {
    return null;
  }

  return (
    <Layout menus={menus} title={post.title} contactData={contactData}>
      <div className="page single-post">
        <Container>
          <h3>{post.title}</h3>
          {post.featuredImage.node.sourceUrl && (
            <figure className="featured-image">
              <img src={post.featuredImage.node.sourceUrl} />
            </figure>
          )}

          <div className="min-container">
            <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params = {} as any } = {}) {
  const { post } = await getPostBySlug(params.slug);
  const { posts } = await getAllPosts();

  return {
    props: {
      post,
      posts,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await getAllPosts();
  
  return {
    // @ts-expect-error
    paths: posts.map((post) => `/posts/${post.slug}`) || [],
    fallback: false,
  };
}
