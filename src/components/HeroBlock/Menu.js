import React, {useState} from 'react';

const Menu = (links) => {
  const navItems = links.links.map((link, i) => <a href={link.href} className="hero-menu-bar-navigation-item" key={i}>{link.title}</a>);
  const [open, setOpen] = useState(false);
  const  toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={`hero-menu ${
      open
        ? "hero-menu-show"
        : ""
    }`}>
      <div className="hero-menu-burger"
           onClick={toggleMenu}>
        <span className="hero-menu-burger-span"/>
        <span className="hero-menu-burger-span"/>
        <span className="hero-menu-burger-span"/>
      </div>
      <div className={`hero-menu-bar ${
        open
          ? "hero-menu-bar-show"
          : ""
      }`}>
      <nav className="hero-menu-bar-navigation">
        {navItems}
      </nav>
      <p className="hero-menu-bar-text">
        2020, Все права защищены
      </p>
      <p className="hero-menu-bar-text-privacy">
        Согласие на обработку персональных данных <br/>
        Политика конфиденциальности
      </p>
      </div>
    </div>
  );
};

export default Menu;