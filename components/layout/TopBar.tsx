import react, { useState } from 'react';
import Link from 'next/link';

type Props = {
  menu: any;
};

const TopBar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="top-bar flex">
      <div className="md-shown burger" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="menu mobile-menu" style={{ left: toggle ? 0 : -250 }}>
        <div className="hide-menu md-shown" onClick={toggleMenu}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <Link href="/ad-platform">Хайбрид зарын платформ</Link>
        <Link href="/loyalty/dashboard">Лояалти хөтөлбөр</Link>
        <Link href="/booking/select-branch">Засвар үйлчилгээний захиалга</Link>
        <Link href="/parts-sales">Баталгаат сэлбэг худалдаа</Link>
      </div>
      <div className="top-contact">
        <span className="time">09:00 - 17:30</span>
        <span className="call">
          <i className="fa-solid fa-headset" /> 7011 3800
        </span>
      </div>
    </div>
  );
};

export default TopBar;
