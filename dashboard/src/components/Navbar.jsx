import React from "react";
import { Typography, Menu } from "antd";
import {
  HomeOutlined,
  BulbOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  FolderOutlined,
  WechatOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Typography.Title level={5} className="logo">
          Remote salesFuel
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item
          icon={
            <HomeOutlined
              style={{
                fontSize: "25px",
                color: "#08c",
                margin: "1px",
                padding: "3px",
              }}
            />
          }
        >
          Home
        </Menu.Item>
      </Menu>
      <Menu theme="dark">
        <Menu.Item
          icon={
            <BulbOutlined
              style={{
                fontSize: "25px",
                color: "#08c",
                margin: "1px",
                padding: "3px",
              }}
            />
          }
        >
          Knowledge
        </Menu.Item>
      </Menu>
      <Menu theme="dark">
        <Menu.Item
          icon={
            <TeamOutlined
              style={{
                fontSize: "25px",
                color: "#08c",
                margin: "1px",
                padding: "3px",
              }}
            />
          }
        >
          Members
        </Menu.Item>
      </Menu>
      <Menu theme="dark">
        <Menu.Item
          icon={
            <UsergroupAddOutlined
              style={{
                fontSize: "25px",
                color: "#08c",
                margin: "1px",
                padding: "3px",
              }}
            />
          }
        >
          Teams
        </Menu.Item>
      </Menu>
      <Menu theme="dark">
        <Menu.Item
          icon={
            <FolderOutlined
              style={{
                fontSize: "25px",
                color: "#08c",
                margin: "1px",
                padding: "3px",
              }}
            />
          }
        >
          Vault
        </Menu.Item>
      </Menu>
      <Menu theme="dark">
        <Menu.Item
          icon={
            <WechatOutlined
              style={{
                fontSize: "25px",
                color: "#08c",
                margin: "1px",
                padding: "3px",
              }}
            />
          }
        >
          Chat
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
