import { useRouter } from "next/router";
import React from "react";
import CategoryDetail from "../../../../modules/clientPortal/knowledgeBase/containers/CategoryDetail";
import Layout from "../../../../modules/clientPortal/main/containers/Layout";
import { Store } from "../../../../modules/clientPortal/types";

export default function Category() {
  const router = useRouter();

  return (
    <Layout>
      {(props: Store) => {
        return <CategoryDetail {...props} queryParams={router.query} />;
      }}
    </Layout>
  );
}
