import { getApolloClient } from "./apollo-client";
import { QUERY_ALL_MENUS } from "../data/menus";

export function mapMenuData(menu = {}) {
  const { node } = menu;
  const data = { ...node };

  data.menuItems = data.menuItems.edges.map(({ node }) => {
    return { ...node };
  });

  return data;
}

export async function getAllMenus() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_MENUS,
  });

  const menus = data?.data.menus.edges.map(mapMenuData);

  return {
    menus,
  };
}
