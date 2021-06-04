import React from "react";
import "./Page.css";
import NavDropdown from "../components/NavDropdown/NavDropdown";
import Page from "../components/Page";

function BreakpointApproach() {
  return (
    <Page DropdownComponent={NavDropdown}>
      <h1>Inferior solutions</h1>
      <hr />

      <h2>Breakpoint approach</h2>

      <ol className="List-spaced">
        <li>
          Pick an arbitrary breakpoint (e.g. 992px) as the maximum width of your
          touchscreen layout
        </li>
        <li>
          Optimize your UI (and therefore dropdowns) for touchscreen on any
          devices below that breakpoint (992px)
        </li>
        <li>
          Don't worry about touchscreen behavior on devices above that
          breakpoint (992px)
        </li>
      </ol>

      <p>There are a couple of obvious downsides to this approach:</p>

      <ul className="List-spaced">
        <li>
          Many touch devices are likely to exceed the breakpoint you choose
          (iPad pro has width of 1366px in landscape mode)
        </li>
        <li>
          If you set your breakpoint too high, you may be locking many mouse
          users into touchscreen optimized interfaces
        </li>
      </ul>

      <h2>Touch detection approach</h2>

      <ul className="List-spaced">
        <li>
          Set a global flag after the user touches the screen for the first time
        </li>
        <li>
          Doesn't account for devices that support touch and mouse
          simultaneously
        </li>
        <li>Interferes with development and testing</li>
      </ul>
    </Page>
  );
}

export default BreakpointApproach;
