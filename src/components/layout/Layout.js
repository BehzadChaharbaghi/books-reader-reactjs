import React from "react";

const Layout = (props) => {
  return (
    <div>
      header
      <div>{props.children}</div>
      rightSidebar
    </div>
  );
};

export default Layout;
