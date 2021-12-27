import React from 'react';
import { getPageBySlug } from '../../lib/page';
import Layout from '../../components/layout/Layout';
import { Container } from 'react-bootstrap';

export default function Greeting({ page, menus, contactData }) {
  return (
    <Layout contactData={contactData} menus={menus} title={page.title}>
      <div className="plain-page greeting">
        <Container>
          <figure>
            <img src={page.featuredImage.node.sourceUrl} />
          </figure>
          <div className="min-container">
            <h3>{page.title}</h3>
            <div className="content" dangerouslySetInnerHTML={{ __html: page.content }} />
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params = {} as any } = {}) {
  const { page } = await getPageBySlug('greeting');
  return {
    props: {
      page,
    },
  };
}
