import React from 'react';
import Banner from '../components/Banner';
import ProductsRow from '../components/ProductsRow';
import { getAllPosts, getPagesCount, getPaginatedPosts } from '../lib/posts';
import Layout from '../components/layout/Layout';

export default function Index({ posts, menus }) {
  return (
    <Layout menus={menus} title="Нүүр хуудас">
      <Banner data={posts} />
      <ProductsRow title="Баталгаат сэлбэг худалдаа" />
      <ProductsRow title="Танд хэрэгтэй зар" type="user" />
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

export async function getStaticPaths() {
  const { posts } = await getAllPosts();
  const pagesCount = await getPagesCount(posts);

  const paths = [...new Array(pagesCount)].map((_, i) => {
    return { params: { page: String(i + 1) } };
  });

  return {
    paths,
    fallback: false,
  };
}
