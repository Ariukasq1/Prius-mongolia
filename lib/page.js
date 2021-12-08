import { getApolloClient } from './apollo-client';
import { QUERY_PAGE_BY_DATABASEID } from '../data/posts';

export async function getPageByID(id) {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_PAGE_BY_DATABASEID,
    variables: { id: id },
  });

  const page = data?.data.page;

  return {
    page,
  };
}
