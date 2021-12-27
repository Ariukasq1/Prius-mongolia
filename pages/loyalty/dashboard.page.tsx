import Layout from '../../components/layout/Layout';
import Scoring from '../../components/loyalty/dashboard/Scoring';
import { Container, Row, Col } from 'react-bootstrap';
import MyLoyalty from '../../components/loyalty/dashboard/MyLoyalty';
import MyCar from '../../components/loyalty/dashboard/MyCar';
import MaintenanceHistory from '../../components/loyalty/dashboard/MaintenanceHistory';
import Presents from '../../components/loyalty/dashboard/Presents';
import TransactionHistory from '../../components/loyalty/dashboard/TransactionHistory';
import MyShop from '../../components/loyalty/dashboard/MyShop';
import MyAds from '../../components/loyalty/dashboard/MyAds';
const Dashboard = ({ menus, contactData }) => {
  return (
    <Layout menus={menus} contactData={contactData} title="Dashboard">
      <Container>
        <div className="plain-page">
          <Scoring />
          <Row>
            <Col lg={4} md={6} sm={12}>
              <MyLoyalty />
            </Col>
            <Col lg={4} md={6} sm={12}>
              <MyCar />
            </Col>
            <Col lg={4} md={6} sm={12}>
              <MaintenanceHistory />
            </Col>
          </Row>
          <Presents />
          <Row>
            <Col md={8} sm={12}>
              <TransactionHistory />
            </Col>
            <Col md={4} sm={12}>
              <MyShop />
            </Col>
          </Row>
          <MyAds />
        </div>
      </Container>
    </Layout>
  );
};

export default Dashboard;
