import React from "react";
import "../styles/navbar.css";

interface NavbarProps {
  links: Array<{
    id: number;
    title: string;
    url: string;
  }>;
  buttonText: string;
  buttonUrl: string;
}

const Navbar: React.FC<NavbarProps> = ({ links, buttonText, buttonUrl }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {links.map((link) => (
          <li key={link.id} className="navbar__item">
            <a
              href={link.url}
              onClick={(e) => handleClick(e, link.title.toLowerCase())}
              className="navbar__link"
            >
              {link.title}
            </a>
          </li>
        ))}
        <li>
          <a href={buttonUrl} target="_blank" className="navbar__button">
            {buttonText}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
