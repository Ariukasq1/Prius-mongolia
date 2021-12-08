import { getApolloClient } from './apollo-client';
import { QUERY_PAGE_BY_SLUG } from '../data/posts';

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
