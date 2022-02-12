import React from "react";
import { Tabs } from "antd";
import Auto from "./auto/auto";
import Moto from "./moto/moto";
import Velo from "./velo/velo";

const { TabPane } = Tabs;

const ShopPage = () => (
  <Tabs defaultActiveKey="1" centered>
    <TabPane tab="Auto" key="1">
      <Auto />
    </TabPane>
    <TabPane tab="Moto" key="2">
      <Moto />
    </TabPane>
    <TabPane tab="Velo" key="3">
      <Velo />
    </TabPane>
  </Tabs>
);
export default ShopPage;
