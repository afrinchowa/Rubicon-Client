import { Helmet} from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from '../../assets/domenico-loia-hGV2TfOh0ns-unsplash.jpg'
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const vehicle = menu.filter(item =>item.type === 'Vehicle');
    const itEquipment = menu.filter(item =>item.type === 'IT Equipment');
    const furniture = menu.filter(item =>item.type === 'Furniture');
    const electronics = menu.filter(item =>item.type === 'Electronics');
    const officeEquipment = menu.filter(item =>item.type === 'Office Equipment');
    return (
        <div>
            <Helmet>
                <title>Rubicon | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title="Asset List"></Cover>
            <SectionTitle heading='Vehicle'></SectionTitle>
            <MenuCategory items={vehicle}></MenuCategory>
        </div>
    );
};

export default Menu;