import Layout from '../../components/layout/Layout';
import Scoring from '../../components/loyalty/Scoring';
import { Container } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Layout title="Dashboard">
      <Container>
        <div className="plain-page">
          <Scoring />
        </div>
      </Container>
    </Layout>
  );
};

export default Dashboard;
