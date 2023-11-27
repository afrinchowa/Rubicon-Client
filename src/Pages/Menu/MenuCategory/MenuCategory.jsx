import { Link } from "react-router-dom";

import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({items,name, img}) => {
    return (
        <div className="p-2">
        {name && <Cover img={img} name={name}></Cover>}
           <div className="grid md:grid-cols-2 gap-10 my-16">
      {
        items.map(item=><MenuItem
        key={item._id}
        item={item}
          ></MenuItem> )
      }
    </div>
   <Link to={`/order/${name}`}>
   <button className="btn btn-outline border-0 border-b-4 mt-4 ">Order Now</button></Link>
    </div>
    );
};

export default MenuCategory;


