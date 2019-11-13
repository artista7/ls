import React, { useState } from "react";
import NavbarContainer from "./NavbarContainer";
import { Link } from "./../util/router.js";

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer spaced={props.spaced} color={props.color}>
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            <span className="is-size-4" style={{ fontFamily: "pacifico" }}>learningSage</span>
          </a>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
