import React from "react";
import {
  SettingOutlined,
  BuildOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Typography, Menu } from "antd";

function Footer() {
  return (
    <div className="footer-container">
      <Menu theme="dark">
        <Menu.Item
          icon={
            <SettingOutlined
              style={{
                fontSize: "25px",
                color: "#08c",
                margin: "1px",
                padding: "3px",
              }}
            />
          }
        >
          Settings
        </Menu.Item>
      </Menu>
      <Menu theme="dark">
        <Menu.Item
          icon={
            <BuildOutlined
              style={{
                fontSize: "25px",
                color: "#08c",
                margin: "1px",
                padding: "3px",
              }}
            />
          }
        >
          Company
        </Menu.Item>
      </Menu>
      <Menu theme="dark">
        <Menu.Item
          icon={
            <UserOutlined
              style={{
                fontSize: "25px",
                color: "#08c",
                margin: "1px",
                padding: "3px",
              }}
            />
          }
        >
          Profile
        </Menu.Item>
      </Menu>
      <div className="logo-container">
        <Typography.Title level={5} className="logo">
          Powered by ME
        </Typography.Title>
      </div>
    </div>
  );
}

export default Footer;
