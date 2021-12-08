import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';

const FloatingMenu = () => {
  return (
    <div className="floating-menu">
      <OverlayTrigger key="left" placement="left" overlay={<Tooltip id={`tooltip-left`}>Facebook</Tooltip>}>
        <a target="_blank" href="https://fb.com">
          <i className="fa-brands fa-facebook"></i>
        </a>
      </OverlayTrigger>
      <OverlayTrigger key="left" placement="left" overlay={<Tooltip id={`tooltip-left`}>Instagram</Tooltip>}>
        <a target="_blank" href="https://fb.com">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </OverlayTrigger>
      <OverlayTrigger key="left" placement="left" overlay={<Tooltip id={`tooltip-left`}>Youtube</Tooltip>}>
        <a target="_blank" href="https://fb.com">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </OverlayTrigger>
      <OverlayTrigger key="left" placement="left" overlay={<Tooltip id={`tooltip-left`}>Цаг захиалга</Tooltip>}>
        <a target="_blank" href="https://fb.com">
          <i className="fa-regular fa-clock"></i>
        </a>
      </OverlayTrigger>
      <OverlayTrigger key="left" placement="left" overlay={<Tooltip id={`tooltip-left`}>Дуудлага өгөх</Tooltip>}>
        <a target="_blank" href="https://fb.com">
          <i className="fa-solid fa-phone"></i>
        </a>
      </OverlayTrigger>
    </div>
  );
};

export default FloatingMenu;
