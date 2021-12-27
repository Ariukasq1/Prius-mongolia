import { getApolloClient } from './apollo-client';
import { QUERY_PAGE_BY_SLUG, QUERY_PAGES_BY_PARENT } from '../data/posts';

export function mapPageData(page = {}) {
  const data = { ...page };

  if (data.featuredImage) {
    data.featuredImage = data.featuredImage.node;
  }

  if (data.parent) {
    data.parent = data.parent.node;
  }

  if (data.children) {
    data.children = data.children.edges.map(({ node }) => node);
  }

  return data;
}

export async function getPageBySlug(slug) {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_PAGE_BY_SLUG,
    variables: { slug: slug },
  });

  const page = data?.data.page;

  return {
    page,
  };
}

export async function getPagesByParent(databaseID) {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_PAGES_BY_PARENT,
    variables: { databaseID },
  });

  const pages = data?.data.pages.edges.map(({ node = {} }) => node);

  return {
    pages: Array.isArray(pages) && pages.map(mapPageData),
  };
}
