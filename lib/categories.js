import { getApolloClient } from "./apollo-client";
import { QUERY_ALL_CATEGORIES } from "../data/categories";

/**
 * getAllCategories
 */

export async function getAllCategories() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_CATEGORIES,
  });

  const categories = data?.data.categories.edges.map(({ node = {} }) => node);

  return {
    categories,
  };
}
