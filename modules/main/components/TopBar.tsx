import react from 'react';
import Link from 'next/link';
const TopBar = () => {
  return (
    <div className="top-bar flex">
      <div className="menu">
        <Link href="/">Хайбрид зарын платформ</Link>
        <Link href="/">Хайбрид зарын платформ</Link>
        <Link href="/">Хайбрид зарын платформ</Link>
        <Link href="/">Хайбрид зарын платформ</Link>
      </div>
      <div className="top-contact">
        <span className="time">09:00 - 17:30</span>
        <span className="call">
          <i className="fa-solid fa-headset"></i> 7011 3800
        </span>
      </div>
    </div>
  );
};

export default TopBar;
