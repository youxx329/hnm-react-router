import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const menuList = ['Women', 'Men', 'Baby', 'Kids', 'Home'];
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  const goToMain = () => {
    navigate('/');
  };

  return (
    <div className="nev-wrap">
      <div className="login-wrap" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
      <div className="logo-wrap">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"
          alt="logo"
          onClick={goToMain} className='logo'
        />
      </div>
      <div className="nev-section">
        <div className="left-section"></div>
        <div className="center-section">
          <ul className="menu-list">
            {menuList.map((menu) => (
              <li>{menu}</li>
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
