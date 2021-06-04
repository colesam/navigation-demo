import React from "react";
import "../Nav.css";
import "./NavDropdown.css";

function NavDropdown({ triggerContent, triggerHref, links }) {
  return (
    <div className="NavDropdown">
      {/* Parent anchor always visible */}
      <a href={triggerHref} className="NavDropdown_trigger Nav_focusable">
        {triggerContent}
      </a>

      {/* Child links only visible when parent is hovered over */}
      <ul className="NavDropdown_dropdown">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="NavDropdown_dropdownAnchor">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavDropdown;
