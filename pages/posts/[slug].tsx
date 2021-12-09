import React from 'react';
import { getAllPosts, getPostBySlug } from '../../lib/posts';
import Layout from '../../components/layout/Layout';
import { Container } from 'react-bootstrap';

export default function Index({ post }) {
  return (
    <Layout title={post.title}>
      <div className="page">
        <Container>
          <h3>{post.title}</h3>
          <figure>
            <img src={post.featuredImage.node.sourceUrl} />
          </figure>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Container>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params = {} as any } = {}) {
  const { post } = await getPostBySlug(params.slug);
  return {
    props: {
      post,
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
