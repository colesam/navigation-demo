import React from "react";
import "./Page.css";
import Page from "../components/Page";
import NavDropdownBetter from "../components/NavDropdown/NavDropdownBetter";
import hljs from "highlight.js";

function PreventDefaultApproach() {
  const jsxCode = hljs.highlightAuto(`
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
      <Link
        to={triggerHref}
        className="NavDropdown_trigger Nav_focusable"
        onTouchEnd={onTouchEnd}
        ref={triggerElem}
      >
        {triggerContent}
      </Link>

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
  `).value;

  return (
    <Page DropdownComponent={NavDropdownBetter}>
      <h1>Prevent default approach</h1>

      <hr />

      <ul className="List-spaced">
        <li>
          Recall the event chain from the previous slide:
          <ol>
            <li>
              <span className="Code-inline">touchstart</span>
            </li>
            <li>
              <span className="Code-inline">touchmove</span>
            </li>
            <li>
              <span className="Code-inline">touchend</span>
            </li>
            <li>
              <span className="Code-inline">mousemove</span>
            </li>
            <li>
              <span className="Code-inline">mousedown</span>
            </li>
            <li>
              <span className="Code-inline">mouseup</span>
            </li>
            <li>
              <span className="Code-inline">click</span>
            </li>
            <li>Default anchor behavior</li>
          </ol>
        </li>
        <li>
          If we call <span className="Code-inline">e.preventDefault()</span>{" "}
          inside of the <span className="Code-inline">touchend</span> handler,
          it won't trigger the mouse and click events
        </li>
        <li>
          This makes it possible to shift the logic earlier up the event chain,
          because the touch behavior is the only behavior that requires custom
          code
          <ul>
            <li>
              <span className="Code-inline">click</span> "handling" is just
              letting the anchor behave naturally
            </li>
          </ul>
        </li>
      </ul>

      <div className="Page_code">
        <pre>
          <code dangerouslySetInnerHTML={{ __html: jsxCode }} />
        </pre>
      </div>
    </Page>
  );
}

export default PreventDefaultApproach;
