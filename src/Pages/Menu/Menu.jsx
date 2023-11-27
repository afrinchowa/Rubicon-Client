import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/domenico-loia-hGV2TfOh0ns-unsplash.jpg";
import itImg from "../../assets/alexander-grey-8lnbXtxFGZw-unsplash.jpg";
import furnitureImg from "../../assets/austin-distel-EMPZ7yRZoGw-unsplash.jpg";
import electronicsImg from "../../assets/krakenimages-376KN_ISplE-unsplash.jpg";
import officeEquipmentImg from "../../assets/piggybank-lq-PS3Yyzg8-unsplash.jpg";
import vehicleImg from "../../assets/obi-pixel8propix-6e4aGH22XFo-unsplash.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const vehicle = menu.filter((item) => item.type === "Vehicle");
  const itEquipment = menu.filter((item) => item.type === "IT Equipment");
  const furniture = menu.filter((item) => item.type === "Furniture");
  const electronics = menu.filter((item) => item.type === "Electronics");
  const officeEquipment = menu.filter((item) => item.type === "Office Equipment");
  return (
    <div>
      <Helmet>
        <title>Rubicon | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuImg} title="Asset List"></Cover>
      <SectionTitle heading="Vehicle"></SectionTitle>
      {/* vehicle */}
      <MenuCategory
        items={vehicle}
       title="Vehicle"
       name="Vehicle"
        img={vehicleImg}
      ></MenuCategory>

      {/* electronics" */}
      <SectionTitle heading="Electronics"></SectionTitle>
      <MenuCategory
        items={electronics}
       title="Electronics"
       name="Electronics"
        img={electronicsImg}
      ></MenuCategory>
      {/* office equipment" */}
      <SectionTitle heading="officeEquipment"></SectionTitle>
      <MenuCategory
        items={officeEquipment}
       title="officeEquipment"
       name="officeEquipment"
        img={officeEquipmentImg}
      ></MenuCategory>
      {/*furniture  */}
      <SectionTitle heading="Furniture"></SectionTitle>
      <MenuCategory
        items={furniture}
       title="Furniture"
      name="Furniture"
        img={furnitureImg}
      ></MenuCategory>
      {/* itEquipment  */}
      <SectionTitle heading="It Equpment"></SectionTitle>
      <MenuCategory
        items={itEquipment}
       title="It Equipment"
       name="It Equipment"
        img={itImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
