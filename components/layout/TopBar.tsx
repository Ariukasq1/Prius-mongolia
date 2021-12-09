import react from 'react';
import Link from 'next/link';

type Props = {
  menu: any;
};

const TopBar = () => {
  return (
    <div className="top-bar flex">
      <div className="menu">
        <Link href="/">Хайбрид зарын платформ</Link>
        <Link href="/">Лояалти хөтөлбөр</Link>
        <Link href="/">Засвар үйлчилгээний захиалга</Link>
        <Link href="/">Баталгаат сэлбэг худалдаа</Link>
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
