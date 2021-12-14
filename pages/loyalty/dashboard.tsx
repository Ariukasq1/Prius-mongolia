import Layout from '../../components/layout/Layout';
import Scoring from '../../components/loyalty/dashboard/Scoring';
import { Container, Row, Col } from 'react-bootstrap';
import MyLoyalty from '../../components/loyalty/dashboard/MyLoyalty';
import MyCar from '../../components/loyalty/dashboard/MyCar';
import MaintenanceHistory from '../../components/loyalty/dashboard/MaintenanceHistory';

const Dashboard = () => {
  return (
    <Layout title="Dashboard">
      <Container>
        <div className="plain-page">
          <Scoring />
          <Row>
            <Col lg={4} md={6} sm={12}>
              <MyLoyalty />
              <MyCar />
              <MaintenanceHistory />
            </Col>
            <Col lg={4} md={6} sm={12}>
              <MyCar />
            </Col>
            <Col lg={4} md={6} sm={12}>
              <MaintenanceHistory />
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  );
};

export default Dashboard;
