

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import orderCoverImg from "../../assets/austin-distel-DfjJMVhwH_8-unsplash.jpg"
import "react-tabs/style/react-tabs.css";
import { useState } from "react";

// import FoodCard from "../../../components/Foodcard/FoodCard";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import useMenu from "../../Hooks/useMenu";
const Order = () => {
  const categories = ["vehicle", "electronics", "officeEquipment", "itEquipments", "furniture"];
  const { type } = useParams();
  const initialIndex = categories.indexOf(type);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const vehicle = menu.filter((item) => item.type === "Vehicle");
  const itEquipment = menu.filter((item) => item.type === "IT Equipment");
  const furniture = menu.filter((item) => item.type === "Furniture");
  const electronics = menu.filter((item) => item.type === "Electronics");
  const officeEquipment = menu.filter((item) => item.type === "Office Equipment");

  return (
    <div>
      <Helmet>
        <title>Rubicon| order Asset </title>
      </Helmet>
      <Cover img={orderCoverImg} title={"Order Food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>vehicle</Tab>
          <Tab>electronics</Tab>
          <Tab>Office Equipment</Tab>
          <Tab>It Equipment</Tab>
          <Tab>furniture</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={vehicle}></OrderTab>
        </TabPanel>

        <TabPanel>
          <OrderTab items={electronics}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={officeEquipment}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={itEquipment}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={furniture}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
