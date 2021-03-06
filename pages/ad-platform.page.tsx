import React from 'react';
import ProductsRow from '../components/ProductsRow';
import CommonAds from '../components/CommonAds';
import { getAllPosts, getPagesCount, getPaginatedPosts } from '../lib/posts';
import Layout from '../components/layout/Layout';
import { Container } from 'react-bootstrap';

export default function Index({ menus, contactData }) {
  return (
    <Layout menus={menus} contactData={contactData} title="Хайбрид зарын платформ">
      <div className="plain-page">
        <ProductsRow title="Онцолсон зар" />
        <Container>
          <CommonAds />
        </Container>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params = {} as any } = {}) {
  const { posts, pagination } = await getPaginatedPosts(params && params.page, 'banner', 4);
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
  };
}

// export async function getStaticPaths() {
//   const { posts } = await getAllPosts();
//   const pagesCount = await getPagesCount(posts);

//   const paths = [...new Array(pagesCount)].map((_, i) => {
//     return { params: { page: String(i + 1) } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }
