import React from "react";
import "./Page.css";
import NavDropdown from "../components/NavDropdown/NavDropdownBest";
import Page from "../components/Page";

function Home() {
  return (
    <Page DropdownComponent={NavDropdown}>
      <h1>Implementing Navigation Dropdowns for Touch and Click Devices</h1>

      <hr />

      <h2>What will I be talking about?</h2>

      <ul className="List-spaced">
        <li>
          A common (and disfunctional) approach to implementing navigation
          dropdowns that demonstrates the problem
        </li>
        <li>
          A few solutions to this problem
          <ol className="List-spaced">
            <li>
              Using breakpoints - <em>bad</em>
            </li>
            <li>
              Touch-user detection - <em>less bad</em>
            </li>
            <li>
              Touch flag approach - <em>good</em>
            </li>
            <li>
              Prevent default approach - <em>best</em>
            </li>
          </ol>
        </li>
      </ul>

      <h2>Ideal dropdown behavior</h2>

      <p>
        In the top right of the navigation you will find an example of a
        navigation dropdown that has been implemented correctly for mouse and
        touch users.
      </p>

      <p>
        <strong>Expected behavior for mouse:</strong> Hovering over dropdown
        will expand its hidden area, clicking on the parent anchor of a dropdown
        will instantly route you to that page.
      </p>

      <p>
        <strong>Expected behavior for touch:</strong> Tapping on a dropdown will
        expand its hidden area, a second tap on the parent anchor will route you
        to that page.
      </p>
    </Page>
  );
}

export default Home;
