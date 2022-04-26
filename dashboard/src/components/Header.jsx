import React from "react";
import { MoreOutlined, SmileOutlined } from "@ant-design/icons";

function Header() {
  return (
    <nav className="navbar navbar-expand ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Knowledge
        </a>
        <div className="d-flex">
          <button className="btn btn-outline-success" type="submit">
            Create Course
          </button>
        </div>
        <SmileOutlined style={{ fontSize: '29px', color: '#08c' }} />
        <MoreOutlined style={{ fontSize: '29px', color: '#08c' }}/>
      </div>
    </nav>
  );
}

export default Header;
