import React, { useState } from 'react';
import TopBar from './TopBar';
import Image from 'next/image';
import Modal from '../common/Modal';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import FloatingMenu from './FloatingMenu';
import LoginContainer from '../../modules/clientPortal/user/containers/Login';
import UserDropdown from '../../components/UserDropdown';
import CartDropdown from '../CartDropdown';
const Header = () => {
  const [user, setUser] = useState(true);
  const [modalShow, setModalShow] = useState(false);

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
        <div className="main-search main-col center">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Хайлт" />
          <Button className="filter">
            <img src="/icons/filter.png" />
          </Button>
        </div>
        <div className="loyalty center main-col">
          <Link href="/loyalty/dashboard">
            <a>
              <img src="/images/icons/hand.svg" />
              <span>Лояалти хөтөлбөр</span>
            </a>
          </Link>
        </div>
        <div className="user center main-col">
          {user ? (
            <UserDropdown />
          ) : (
            <>
              <Button className="transparent" onClick={() => setModalShow(!modalShow)}>
                Нэвтрэх
              </Button>
              <Modal content={() => <LoginContainer title="Нэвтрэх" />} onHide={() => setModalShow(!modalShow)} show={modalShow} />
            </>
          )}
        </div>
        <div className="cart center main-col ">
          <CartDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
