import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Typography } from "antd";
import React, { useState } from "react";

import styles from "../../styles/MainLayout.module.css";
import HorizontalMenu from "./HorizontalMenu";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <HorizontalMenu />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          <div className={styles.logo}>
            <Title level={3}>One-Academy</Title>
          </div>
        </Header>
        <Content
          style={{
            margin: "16px",
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          One Academy Admin panel @2022
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
