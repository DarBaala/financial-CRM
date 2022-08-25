import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [burger, setBurger] = useState(false);

  const handleMenu = () => {
    setBurger(!burger);
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__left">
          <div onClick={handleMenu} className="header__burger-menu">
            <span className="header__line"></span>
            <span className="header__line"></span>
            <span className="header__line"></span>
          </div>
          <Link to={"/"}>
            <img
              className="header__logo"
              src="/logo.svg"
              alt="Logo: Financial assistant"
            />
          </Link>
        </div>
        <div className="header__right">
          <p className="header__user">USER NAME</p>
          <div className="header__select"></div>
        </div>
      </div>
      <div
        onClick={handleMenu}
        className={burger ? "header__menu" : "header__menu--hidden"}
      >
        <ul className="header__list">
          <Link to={"/balance"}>
            <li className="header__item">Счет</li>
          </Link>
          <li className="header__item">История</li>
          <li className="header__item">Планирования</li>
          <li className="header__item">Новая запись</li>
          <li className="header__item">Категории</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
