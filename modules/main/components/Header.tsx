import react, { useState } from 'react';
import TopBar from './TopBar';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
const Header = () => {
  const [user, setUser] = useState(true);
  return (
    <header>
      <TopBar />
      <div className="main-bar">
        <div className="logo center main-col">
          <Image className="header-logo" alt="logo" src="/images/logo.png" width={215} height={85} />
        </div>
        <div className="search main-col center"></div>
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
            <Button>
              <span>Сайн байна уу?</span> Хэргэлэгч
            </Button>
          ) : (
            <Button>Нэвтрэх</Button>
          )}
        </div>
        <div className="cart center main-col ">
          <Button>
            <i className="fa-solid fa-cart-shopping"></i>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
