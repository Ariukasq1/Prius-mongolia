import { gql, useMutation } from "@apollo/client";
import React, { useContext } from "react";
import { ApiApolloClientContext } from "../../ApiContext";
import { Config, IUser, Ticket } from "../../types";
import Form from "../components/Form";

type Props = {
  config: Config;
  currentUser: IUser;
};

export const clientPortalCreateTicket = `
  mutation clientPortalCreateTicket(
    $stageId: String!
    $subject: String!
    $description: String
    $email: String!
    $priority: String
  ) {
    clientPortalCreateTicket(
      stageId: $stageId
      subject: $subject
      description: $description
      email: $email
      priority: $priority
    ) {
      _id
    }
  }
`;

function FormContainer({ config = {}, currentUser, ...props }: Props) {
  const apiClient = useContext(ApiApolloClientContext);

  const [createTicket] = useMutation(gql(clientPortalCreateTicket), {
    client: apiClient
  });

  const handleSubmit = (doc: Ticket) => {
    createTicket({
      variables: {
        ...doc,
        stageId: config.ticketStageId,
        email: currentUser.email,
        priority: "Critical", // TODO: Add select in Form
      },
    })
      .then(() => {
        window.location.href = '/tickets';
      });
  };

  const updatedProps = {
    ...props,
    handleSubmit,
  };

  return <Form {...updatedProps} />;
}

export default FormContainer;
