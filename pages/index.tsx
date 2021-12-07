import React from "react";
import { getAllPosts, getPagesCount, getPaginatedPosts } from "../lib/posts";

export default function Index({ posts }) {
  console.log("posts:", posts);

  return <div>Hello, erxes !</div>;
}

export async function getStaticProps({ params = {} as any } = {}) {
  const { posts, pagination } = await getPaginatedPosts(params && params.page);
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: "/posts",
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
