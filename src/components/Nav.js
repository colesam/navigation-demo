import React from "react";
import "./Nav.css";
import AccountAndLists from "./AccountAndLists";
import { Link } from "react-router-dom";
import { ReactComponent as BarsIcon } from "../assets/bars-solid.svg";

function Nav({ DropdownComponent }) {
  return (
    <nav className="Nav">
      <div className="Nav_primary">
        <Link to="/" className="Nav_logo Nav_focusable">
          Demo
        </Link>

        <input type="text" className="Nav_search" placeholder="Search" />

        <AccountAndLists DropdownComponent={DropdownComponent} />

        <div className="Nav_barsIcon" style={{ width: "25px" }}>
          <BarsIcon />
        </div>
      </div>

      <div className="Nav_secondary">
        <Link to="/example/1" className="Nav_link Nav_focusable">
          Incorrect Implementation
        </Link>

        <Link to="/example/2" className="Nav_link Nav_focusable">
          Inferior Solutions
        </Link>

        <Link to="/example/3" className="Nav_link Nav_focusable">
          Touch Flag Approach
        </Link>

        <Link to="/example/4" className="Nav_link Nav_focusable">
          Prevent Default Approach
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
