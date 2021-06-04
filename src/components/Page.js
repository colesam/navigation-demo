import React from "react";
import Nav from "./Nav";

function Page({ DropdownComponent, children }) {
  return (
    <>
      <Nav DropdownComponent={DropdownComponent} />
      <div className="Page">{children}</div>
    </>
  );
}

export default Page;
