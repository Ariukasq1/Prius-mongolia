import React from 'react';
import ReactDOM from 'react-dom';

class CommonPortal extends React.Component<{ children: React.ReactNode }> {
  private el;

  constructor(props) {
    super(props);

    this.el = typeof window !== 'undefined' && document.createElement('div');
  }

  componentDidMount() {
    typeof window !== 'undefined' && document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    typeof window !== 'undefined' && document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default CommonPortal;
