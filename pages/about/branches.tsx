import react, { useState } from "react";
import { Button, Row, Col, Container, ButtonToolbar } from "react-bootstrap";
import Layout from "../../components/layout/Layout";
const Branches = (props) => {
  const [map, setMap] = useState(false);

  const renderBranch = () => {
    return (
      <div className="branch">
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <div
              className="thumbnail branch-thumbnail"
              style={{ background: "url(/images/branch.png)" }}
            />
          </Col>
          <Col xs={12} sm={6} lg={6}>
            <div className="branch-content">
              <h6>Төв салбар</h6>
              <p>
                Приус центр төв салбар буюу сэлбэг засвар үйлчилгээний анхны
                нэгдсэн төв нь нэг инженер дөрвөн засварчинтайгаар үүд хаалгаа
                нээж байсан бол өдгөө засварын гурван байр, 50 гаруй ажилтантай,
                нэг дор 20 машинд засвар үйлчилгээ хийх хүчин чадалтай болжээ.
                Төв 1,2 салбараас та бүхэн приус маркийн автомашинаас гадна
                Тоуо1а адиа, ез^/та, а\рЬагд, 50/ зэрэг бүх төрлийн хайбрид
                машины сэлбэг засвар үйлчилгээг авах боломжтой.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} lg={3} className="border-left">
            <div className="branch-contact">
              <h6>Хаяг: </h6>
              <span>
                Гандангийн баруун хойно өндөр дэнж төвийн замын эсрэг талд приус
                центр төв байр.
              </span>
              <h6>Цагийн хуваарь: </h6>
              <span>Да-Ням 10:00 - 20:00</span>
              <span className="status open">Нээлттэй</span>
              <div className="social flex">
                <a target="_blank" href="https://fb.com">
                  <i className="fa-brands fa-facebook" />
                </a>
                <a target="_blank" href="https://fb.com">
                  <i className="fa-brands fa-instagram" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <Layout title="Салбарууд">
      <div className="branches-page page">
        <Container>
          <div className="branches-head">
            <Row className=" flex flex-v-center">
              <Col xs={12} md={7}>
                <h5>Салбарууд</h5>
                <p>
                  Өдгөө бид 7 салбар 220 гаруй ажилчидтайгаар Улаанбаатар хотын
                  5 дүүрэгт үйл ажиллагаагаа эрхлэн явуулж байгаагаас гадна
                  дуудлагын засвар үйлчилгээ нэвтрүүлж, үйлчлүүлэгчийн хүссэн
                  газар, хэрэгтэй цагтаа автомашины засвар үйлчилгээ авах
                  нөхцөлийг бүрдүүлэн ажиллаж байна.{" "}
                </p>
              </Col>
              <Col xs={12} md={5}>
                <ButtonToolbar>
                  <Button variant="primary">
                    <i className="fa-solid fa-list" /> Жагсаалтаар харах
                  </Button>
                  <Button variant="outline-primary">
                    <i className="fa-solid fa-map" /> Газрын зураг
                  </Button>
                </ButtonToolbar>
              </Col>
            </Row>
          </div>
          <div className="branches-body">
            {renderBranch()}
            {renderBranch()}
            {renderBranch()}
            {renderBranch()}
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Branches;
