import { getApolloClient } from "./apollo-client";
import { QUERY_ALL_USERS } from "../data/categories";

export async function getAllUsers() {
  const apolloClient = getApolloClient();

  let usersData;

  try {
    usersData = await apolloClient.query({
      query: QUERY_ALL_USERS,
    });
  } catch (e) {
    console.log(
      `[users][getAllUsers] Failed to query users data: ${e.message}`
    );
    throw e;
  }

  let users = usersData?.data.users.edges
    .map(({ node = {} }) => node)
    .map(mapUserData);

  return {
    users,
  };
}
