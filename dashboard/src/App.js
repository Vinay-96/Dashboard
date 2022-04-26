import React from "react";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const { Sider, Content } = Layout;

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Sider>
          <Navbar />
        </Sider>
        <Header />
        <Content>
          <Hero />
          <Card />
        </Content>
        <Footer />
      </Layout>
    </div>
  );
};

export default App;
