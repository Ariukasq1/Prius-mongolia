import React from "react";
import Home from "../components/Home";
import { Store } from "../../types";
import Layout from "../../main/containers/Layout";
import { fetchAPI, getPosts, getAllPostsForHome } from "../../../lib/api";
import { getWPAllPosts } from "../graphql/queries";
function HomeContainer({ allPosts, preview }) {
  return (
    <Layout headingSpacing={true}>
      {(props: Store) => {
        return <Home {...props} />;
      }}
    </Layout>
  );
}

// export async function getServerSideProps(ctx) {
//   let posts = await getPosts();
//   return {
//     props: {
//       posts,
//     },
//   };
// }

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}

export default HomeContainer;
