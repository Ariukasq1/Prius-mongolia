import react, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
type Props = {
  menu: any;
};

const TopBar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };
  const router = useRouter();

  return (
    <div className="top-bar flex">
      <div className="md-shown burger" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="menu mobile-menu" style={{ left: toggle ? 0 : -250 }}>
        <div className="hide-menu md-shown" onClick={toggleMenu}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <Link href="/ad-platform">
          <a className={router.pathname.includes('/ad-platform') && 'active'}>Хайбрид зарын платформ</a>
        </Link>
        <Link href="/loyalty/dashboard">
          <a className={router.pathname.includes('/loyalty') && 'active'}>Лояалти хөтөлбөр</a>
        </Link>
        <Link href="/booking/select-branch">
          <a className={router.pathname.includes('/booking') && 'active'}>Засвар үйлчилгээний захиалга</a>
        </Link>
        <Link href="/parts-sales">
          <a className={router.pathname.includes('/parts-sales') && 'active'}>Баталгаат сэлбэг худалдаа</a>
        </Link>
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
