import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <header data-testid="header" className="flex-row px-1">
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              Introduction
            </a>
          </li>
          <li className= "mx-2">
            <a href="#projects" onClick={() => handleClick()}>
              Projects
            </a>
          </li>
          <li className= "mx-2">
            <a href="#Contact-Me" onClick={() => handleClick()}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;