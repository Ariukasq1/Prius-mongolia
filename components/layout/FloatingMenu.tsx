import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';

type Props = {
  socialData: any;
};
const FloatingMenu = ({ socialData }: Props) => {
  return (
    <div className="floating-menu">
      {socialData.facebook && (
        <OverlayTrigger key="facebook" placement="left" overlay={<Tooltip id={`tooltip-left`}>Facebook</Tooltip>}>
          <a target="_blank" href={socialData.facebook}>
            <i className="fa-brands fa-facebook" />
          </a>
        </OverlayTrigger>
      )}
      <OverlayTrigger key="instagram" placement="left" overlay={<Tooltip id={`tooltip-left`}>Instagram</Tooltip>}>
        <a target="_blank" href="https://fb.com">
          <i className="fa-brands fa-instagram" />
        </a>
      </OverlayTrigger>
      <OverlayTrigger key="youtube" placement="left" overlay={<Tooltip id={`tooltip-left`}>Youtube</Tooltip>}>
        <a target="_blank" href="https://fb.com">
          <i className="fa-brands fa-youtube" />
        </a>
      </OverlayTrigger>
      <OverlayTrigger key="time" placement="left" overlay={<Tooltip id={`tooltip-left`}>Цаг захиалга</Tooltip>}>
        <a target="_blank" href="https://fb.com">
          <i className="fa-regular fa-clock" />
        </a>
      </OverlayTrigger>
      <OverlayTrigger key="call" placement="left" overlay={<Tooltip id={`tooltip-left`}>Дуудлага өгөх</Tooltip>}>
        <a target="_blank" href="https://fb.com">
          <i className="fa-solid fa-phone" />
        </a>
      </OverlayTrigger>
    </div>
  );
};

export default FloatingMenu;
