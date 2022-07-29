import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
import Link from "next/link";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Admission", "sub1", <MailOutlined />, [
    getItem(
      <Link href="admission/admin">
        <a>Admin</a>
      </Link>,
      "1"
    ),
    getItem(
      <Link href="admission/student">
        <a>Student</a>
      </Link>,
      "2"
    ),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Admin", "3"),
    getItem("Student", "4"),
  ]),
  getItem("Navigation Three", "sub4", <SettingOutlined />, [
    getItem("Admin", "5"),
    getItem("Student", "6"),
  ]),
]; // submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const HorizontalMenu = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Menu
      mode="inline"
      theme="dark"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      items={items}
    />
  );
};

export default HorizontalMenu;
