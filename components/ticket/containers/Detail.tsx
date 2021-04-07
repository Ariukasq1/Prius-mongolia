import { gql, useQuery, useMutation } from '@apollo/client';
import React, { useContext } from 'react';
import { ApiApolloClientContext } from '../../ApiContext';
import Detail from '../components/Detail';
import { IUser } from '../../types';

type Props = {
  _id?: string;
  currentUser: IUser;
  onClose: () => void;
};

const clientPortalGetTicket = `
  query clientPortalTicket($_id: String!) {
    clientPortalTicket(_id: $_id) {
      _id
      name
      description
      modifiedAt
      status
      priority
      createdAt

      comments {
        _id
        content
        createdAt
      }
    }
  }
`;

const createTicketComment = `
  mutation createTicketComment(
    $ticketId: String!
    $content: String!
  ) {
    createTicketComment(
      ticketId: $ticketId
      content: $content
    ) {
      _id
    }
  }
`;

function DetailContainer({ _id, ...props }: Props) {
  const apiClient = useContext(ApiApolloClientContext);

  const { data = {} } = useQuery(gql(clientPortalGetTicket), {
    variables: { _id },
    client: apiClient,
    skip: !_id
  });

  const [createComment] = useMutation(gql(createTicketComment), {
    client: apiClient,
    refetchQueries: [{ query: gql(clientPortalGetTicket), variables: { _id } }]
  });

  const item = data.clientPortalTicket;

  const handleSubmit = (content: string) => {
    createComment({
      variables: {
        content,
        ticketId: item._id
      }
    }).then(() => {});
  };

  const updatedProps = {
    ...props,
    item,
    handleSubmit
  };

  return <Detail {...updatedProps} />;
}

export default DetailContainer;
