import React from "react";
import "./Page.css";
import hljs from "highlight.js";
import NavDropdown from "../components/NavDropdown/NavDropdown";
import Page from "../components/Page";

function IncorrectExamples() {
  const jsxCode = hljs.highlightAuto(`
function NavDropdown({ triggerContent, triggerHref, links }) {
  return (
    <div className="NavDropdown">
    
      <a href={triggerHref} className="NavDropdown_anchor Nav_focusable">
        {triggerContent}
      </a>

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

  const cssCode = hljs.highlightAuto(`
.NavDropdown_dropdown {
    display: none;

    position: absolute;
    right: -1px;
    
    // ...
}

.NavDropdown:hover > .NavDropdown_dropdown {
    display: block;
}
  `).value;

  const accountAndListsCode = hljs.highlightAuto(`
function AccountAndLists() {
  const triggerContent = (
    <div className="AccountAndLists">
      <div className="AccountAndLists_greeting">Hello, Samuel</div>
      <div className="AccountAndLists_label">Account & Lists &#9660;</div>
    </div>
  );
  
  const accountDropdownLinks = [
    { label: "My Account", href: "/account" },
    { label: "My Orders", href: "/orders" },
    { label: "Recently Viewed", href: "/recent" },
    { label: "My Subscriptions", href: "/subs" },
  ];

  return (
    <NavDropdown
      triggerContent={triggerContent}
      triggerHref="/account"
      links={accountDropdownLinks}
    />
  );
}
  `).value;

  return (
    <Page DropdownComponent={NavDropdown}>
      <h1>Examples of incorrect dropdown implementation</h1>
      <hr />
      <p>
        In the top right I've implemented the dropdown incorrectly as an
        example. The main problem is that touch users have no way of expanding
        the hidden nav without activating the trigger anchor.
      </p>
      <h2>Implementation details</h2>
      <p>
        There are many ways to implement a dropdown this way, but a the most
        common method I've seen usually looks something like this:
      </p>
      <div className="Page_code">
        <pre>
          <code dangerouslySetInnerHTML={{ __html: jsxCode }} />
        </pre>
      </div>
      <div className="Page_code">
        <pre>
          <code dangerouslySetInnerHTML={{ __html: cssCode }} />
        </pre>
      </div>
    </Page>
  );
}

export default IncorrectExamples;
