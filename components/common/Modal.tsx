import React from 'react';
import Modal from 'react-bootstrap/Modal';

type Props = {
  show?: boolean;
  rounded?: boolean;
  size?: any;
  title?: string;
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
    const { content, rounded, size, title } = this.props;

    return (
      <Modal {...this.props} size={size} aria-labelledby="contained-modal-title-vcenter" centered={true} className={rounded ? 'rounded' : ''}>
        {title && (
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>{content({ closeModal: this.onCancel })}</Modal.Body>
      </Modal>
    );
  }
}
