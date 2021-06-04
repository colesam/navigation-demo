import React from "react";
import "./Page.css";
import Page from "../components/Page";
import NavDropdownBetter from "../components/NavDropdown/NavDropdownBetter";
import hljs from "highlight.js";

function TouchFlagApproach() {
  const jsxCode = hljs.highlightAuto(`
function NavDropdown({ triggerContent, triggerHref, links }) {
  // \`isTouch\` also might come from a global flag
  const [isTouch, setIsTouch] = useState(false);
  const [touchCount, setTouchCount] = useState(0);
  const triggerElem = useRef(null);

  function applyFocus() {
    if (triggerElem.current) {
      triggerElem.current.focus();
    }
  }

  function onTouchStart() {
    setIsTouch(true);
  }

  function onClick(e) {
    if (isTouch) {
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
    setIsTouch(false);
  }

  function onBlur() {
    setTouchCount(0);
  }

  return (
    <div className="NavDropdown" onBlur={onBlur} onTouchStart={onTouchStart}>
      {/* Parent anchor always visible */}
      <Link
        to={triggerHref}
        className="NavDropdown_trigger Nav_focusable"
        onClick={onClick}
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
  `).value;

  return (
    <Page DropdownComponent={NavDropdownBetter}>
      <h1>Touch flag approach</h1>

      <hr />

      <ul className="List-spaced">
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent">
            MDN - Supporting both TouchEvent and MouseEvent
          </a>
          <ul>
            <li>
              Although the specific ordering of touch and mouse events is
              implementation-defined, the standard indicates the following order
              is typical: for single input:
              <ol>
                <li>
                  <span className="Code-inline">touchstart</span>
                </li>
                <li>
                  Zero or more <span className="Code-inline">touchmove</span>{" "}
                  events, depending on movement of the finger(s)
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
          </ul>
        </li>
        <li>
          We can use this order of events to flag touch events earlier on in the
          event chain, and add special handling in our{" "}
          <span className="Code-inline">click</span> event handler.
        </li>
        <li>
          This is different from touch-user detection, each event is treated
          individually
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

export default TouchFlagApproach;
