import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import SideMenu from './SideMenu';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuList = ['Women', 'Men', 'Baby', 'Kids', 'Home'];
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  const goToMain = () => {
    navigate('/');
  };

  const goToLoginOrLogout = () => {
    if (authenticate) {
      setAuthenticate(false); // 로그아웃 처리
    } else {
      navigate('/login');
    }
  };

  const search = (event) => {
    if (event.key === 'Enter') {
      // console.log('we click this key', event.key);
      // 입력한 검색어를 읽어와서 url을 바꿔준다
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <>
      <div className="nev-wrap">
        {/* 햄버거 버튼 */}
        <div className="login-wrap">
          <div className="mo-bar" onClick={() => setIsMenuOpen(true)}>
            <FontAwesomeIcon icon={faBars} />
          </div>

          <div className="login-box" onClick={goToLoginOrLogout}>
            <FontAwesomeIcon icon={faUser} />
            <div className="login-ico">
              {authenticate ? '로그아웃' : '로그인'}
            </div>
          </div>
        </div>

        <div className="logo-wrap">
          <img
            width={100}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"
            alt="logo"
            onClick={goToMain}
            className="logo"
          />
        </div>

        <div className="nev-section">
          <div className="left-section"></div>
          <div className="center-section">
            <ul className="menu-list">
              {menuList.map((menu) => (
                <li key={menu}>{menu}</li>
              ))}
            </ul>
          </div>
          <div className="right-section">
            <div className="nev-search">
              <FontAwesomeIcon icon={faSearch} />
              <input
                className="input-search"
                type="text"
                placeholder="제품검색"
                onKeyPress={search}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 사이드 메뉴 컴포넌트 */}
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
