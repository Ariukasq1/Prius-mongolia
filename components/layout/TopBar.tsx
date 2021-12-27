import react, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
type Props = {
  menu: any;
};

const TopBar = ({ menu }: Props) => {
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
        {menu &&
          menu.menuItems.map((item) => (
            <Link key={item.id} href={item.path}>
              <a className={router.pathname.includes(item.path) ? 'active' : undefined}>{item.label}</a>
            </Link>
          ))}
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
