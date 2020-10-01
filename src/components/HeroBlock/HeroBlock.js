import React, {useState} from 'react';
import './HeroBlock.scss';
import Menu from "./Menu";

const HeroBlock = ({title, links, logos, imgArrow}) => {
    const logosImages = logos.map((logoItem, i) => <img src={logoItem} alt="partner-logo" className="hero-partners-item" key={i}/>);
    const navItems = links.map((link, i) => <a href={link.href} className="hero-navigation-item" key={i}>{link.title}</a>);

    return (
      <section className="hero">
        <div className="container">
            <Menu links={links}/>
            <div className="hero-partners">
              {logosImages}
            </div>
            <nav className="hero-navigation">
              {navItems}
            </nav>
            <h1 className="hero-title">{title}</h1>
            <a href="#" className="hero-link">Отследить</a>
            <a href="#"><img src={imgArrow} alt="hero-item" className="hero-arrow"/></a>
        </div>
      </section>
    );
};

export default HeroBlock;