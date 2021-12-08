import { getApolloClient } from './apollo-client';
import { QUERY_ALL_POSTS, QUERY_POSTS_BY_CATEGORY_ID, QUERY_POST_PER_PAGE } from '../data/posts';

export function mapPostData(post = {}) {
  const data = { ...post };

  if (data.author) {
    data.author = {
      ...data.author.node,
    };
  }

  if (data.categories) {
    data.categories = data.categories.edges.map(({ node }) => {
      return {
        ...node,
      };
    });
  }

  if (data.featuredImage) {
    data.featuredImage = data.featuredImage.node;
  }

  return data;
}

export function sortStickyPosts(posts) {
  return [...posts].sort((post) => (post.isSticky ? -1 : 1));
}

/**
 * getAllPosts
 */

export async function getAllPosts() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_POSTS,
  });

  const posts = data?.data.posts.edges.map(({ node = {} }) => node);

  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
  };
}

export async function getPostsByCategory(id) {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_POSTS_BY_CATEGORY_ID,
    variables: { categoryId: id },
  });

  const posts = data?.data.posts.edges.map(({ node = {} }) => node);

  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
  };
}

export async function getPostsPerPage() {
  //If POST_PER_PAGE is defined at next.config.js
  if (process.env.POSTS_PER_PAGE) {
    console.warn(
      'You are using the deprecated POST_PER_PAGE variable. Use your WordPress instance instead to set this value ("Settings" > "Reading" > "Blog pages show at most").'
    );
    return Number(process.env.POSTS_PER_PAGE);
  }

  try {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
      query: QUERY_POST_PER_PAGE,
    });

    return Number(data.allSettings.readingSettingsPostsPerPage);
  } catch (e) {
    console.log(`Failed to query post per page data: ${e.message}`);
    throw e;
  }
}

export async function getPagesCount(posts, postsPerPage) {
  const _postsPerPage = postsPerPage ?? (await getPostsPerPage());
  return Math.ceil(posts.length / _postsPerPage);
}

export async function getPaginatedPosts(currentPage = 1, id) {
  const { posts } = await getPostsByCategory(id);
  const postsPerPage = await getPostsPerPage();
  const pagesCount = await getPagesCount(posts, postsPerPage);
  let page = Number(currentPage);
  if (typeof page === 'undefined' || isNaN(page) || page > pagesCount) {
    page = 1;
  }
  const offset = postsPerPage * (page - 1);
  const sortedPosts = sortStickyPosts(posts);
  return {
    posts: sortedPosts.slice(offset, offset + postsPerPage),
    pagination: {
      currentPage: page,
      pagesCount,
    },
  };
}
