import React from "react";
import "./AccountAndLists.css";

function AccountAndLists({ DropdownComponent }) {
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
    <DropdownComponent
      triggerContent={triggerContent}
      triggerHref="/account"
      links={accountDropdownLinks}
    />
  );
}

export default AccountAndLists;
