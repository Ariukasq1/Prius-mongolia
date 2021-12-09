import React from "react";
import Modal from "react-bootstrap/Modal";

type Props = {
  show?: boolean;
  onHide?: () => void;
  content: ({ closeModal }: { closeModal: () => void }) => React.ReactNode;
};

export default class ModalComponent extends React.Component<
  Props,
  { show: boolean }
> {
  constructor(props) {
    super(props);

    this.state = { show: props.show || false };
  }

  onCancel = () => {
    const { onHide } = this.props;

    this.setState({ show: false });

    if (onHide) {
      onHide();
    }
  };

  render() {
    const { content } = this.props;

    return (
      <Modal
        {...this.props}
        aria-labelledby="contained-modal-title-vcenter"
        centered={true}
      >
        <Modal.Body>{content({ closeModal: this.onCancel })}</Modal.Body>
      </Modal>
    );
  }
}
