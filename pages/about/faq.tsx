import react, { useState } from "react";
import { Button, Row, Col, Container, Accordion } from "react-bootstrap";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
const Faq = (props) => {
  const [open, setOpen] = useState(false);
  console.log(open);
  // const renderItem = () => {
  //   return (
  //     <Accordion.Item eventKey="0">
  //       <Accordion.Header>Машин асахгүй хянах дээр чек ассан байна?</Accordion.Header>
  //       <Accordion.Body>
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  //         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  //         voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
  //         deserunt mollit anim id est laborum.
  //       </Accordion.Body>
  //     </Accordion.Item>
  //   );
  // };

  return (
    <Layout title="faq">
      <div className="branches-page faqs-page">
        <Container>
          <div className="branches-head">
            <h5>FAQ</h5>
            <p>
              Өдгөө бид 7 салбар 220 гаруй ажилчидтайгаар Улаанбаатар хотын 5
              дүүрэгт үйл ажиллагаагаа эрхлэн явуулж байгаагаас гадна дуудлагын
              засвар үйлчилгээ нэвтрүүлж{" "}
            </p>
          </div>
          <div className="branches-body">
            <Accordion>
              {/* {renderItem()}
              {renderItem()}
              {renderItem()}
              {renderItem()} */}
            </Accordion>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Faq;
