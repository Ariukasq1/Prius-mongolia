import Layout from "../../../modules/clientPortal/main/containers/Layout";
import TicketList from "../../../modules/clientPortal/ticket/containers/Ticket";
import TicketHeader from "./TicketHeader";

function Ticket() {
  return (
    <Layout headerBottomComponent={<TicketHeader />}>
      {(props) => {
        return <TicketList {...props} />;
      }}
    </Layout>
  );
}

export default Ticket;
