import React from 'react';
import Modal from 'react-bootstrap/Modal';

type Props = {
  show?: boolean;
  rounded?: boolean;
  size?: string;
  onHide?: () => void;
  content: ({ closeModal }: { closeModal: () => void }) => React.ReactNode;
};

export default class ModalComponent extends React.Component<Props, { show: boolean }> {
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
    const { content, rounded, size } = this.props;

    return (
      <Modal {...this.props} size={size} aria-labelledby="contained-modal-title-vcenter" centered={true} className={rounded ? 'rounded' : ''}>
        <Modal.Body>{content({ closeModal: this.onCancel })}</Modal.Body>
      </Modal>
    );
  }
}
