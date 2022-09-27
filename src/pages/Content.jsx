import React from "react";
import Navbar from "../components/common/Navbar";
import SideBar from "../components/sidebar/SideBar";

const Content = ({children}) => {
  return (
    <>
      <div className="dash">
        <Navbar />
        <div className="layout-flex h-full">
          {/* <div className="sidebar-position h-full"> */}
            <SideBar />
          {/* </div> */}
          <div className="children-position">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Content;
