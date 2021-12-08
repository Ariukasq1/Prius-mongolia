import react, { useState } from 'react';
import TopBar from './TopBar';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import FloatingMenu from './FloatingMenu';
const Header = () => {
  const [user, setUser] = useState(true);

  return (
    <header>
      <FloatingMenu />
      <TopBar />
      <div className="main-bar">
        <div className="logo center main-col">
          <Link href="/">
            <a>
              <Image className="header-logo" alt="logo" src="/images/logo.png" width={215} height={85} />
            </a>
          </Link>
        </div>
        <div className="search main-col center" />
        <div className="loyalty center main-col">
          <Link href="/loyalty">
            <a>
              <img src="/images/icons/hand.svg" />
              Лояалти хөтөлбөр
            </a>
          </Link>
        </div>
        <div className="user center main-col">
          {user ? (
            <Button className="transparent">
              <span>Сайн байна уу?</span> Хэргэлэгч
            </Button>
          ) : (
            <Button className="transparent">Нэвтрэх</Button>
          )}
        </div>
        <div className="cart center main-col ">
          <Button className="transparent">
            <i className="fa-solid fa-cart-shopping" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
