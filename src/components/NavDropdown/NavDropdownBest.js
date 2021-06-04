import React, { useRef, useState } from "react";
import "../Nav.css";
import "./NavDropdown.css";
import { Link } from "react-router-dom";

function NavDropdown({ triggerContent, triggerHref, links }) {
  const [touchCount, setTouchCount] = useState(0);
  const triggerElem = useRef(null);

  function applyFocus() {
    if (triggerElem.current) {
      triggerElem.current.focus();
    }
  }

  function onTouchEnd(e) {
    if (touchCount === 0) {
      // Prevent anchor from routing and increment touch count
      e.preventDefault();
      setTouchCount(touchCount + 1);
      // Need to focus on anchor because default behavior is prevented
      applyFocus();
    } else {
      // Reset touch count and allow normal anchor behavior
      setTouchCount(0);
    }
  }

  function onBlur() {
    setTouchCount(0);
  }

  return (
    <div className="NavDropdown" onBlur={onBlur}>
      {/* Parent anchor always visible */}
      <Link
        to={triggerHref}
        className="NavDropdown_trigger Nav_focusable"
        onTouchEnd={onTouchEnd}
        ref={triggerElem}
      >
        {triggerContent}
      </Link>

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
