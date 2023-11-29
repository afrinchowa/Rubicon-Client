import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const AddItems = () => {
  const { register, handleSubmit,reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const onSubmit =async (data) => {
    console.log(data);
    if(res.data.success){
        const menuItem ={
            name:data.name,
            type:data.type,
            details:data.details,
            image:data.image,

        }
        const menuRes = await axiosSecure.post('/menu',menuItem);
        console.log(menuRes.data)
        if(menuRes.data.insertedId){
            // show success pop up
            reset();
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                timer: 1500
              });
        }
    }
   
  };
  return (
    <div>
      <SectionTitle heading="Add an Asset"></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Asset Name</span>{" "}
            </label>
            <input
              type="text"
              placeholder="Asset Name"
              {...register("name",{required:true})}
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>{" "}
              </label>
              <select defaultValue="default"
                {...register("type")}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a Type
                </option>
                <option value="furniture">Furniture</option>
                <option value="itEquipment">It Equipment</option>
                <option value="electronics">Electronics</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Status</span>{" "}
              </label>
              <input
                type="text"
                placeholder="Status"
                {...register("status" ,{required:true})}
                className="input input-bordered w-full "
              />
            </div>
          
          </div>
  {/* details */}
  <label className="form-control">
              <div className="label">
                <span className="label-text">Asset Details</span>
                <span className="label-text-alt">Alt label</span>
              </div>
              <textarea 
                {...register("details" ,{required:true})}
                className="textarea textarea-bordered h-24"
                placeholder="Details"
              ></textarea>
              <div className="label">
                <span className="label-text-alt">Recipe Details</span>
                <span className="label-text-alt">Alt label</span>
              </div>
            </label>
            <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Photo Url</span>{" "}
            </label>
            <input
              type="text"
              placeholder="Photo Url"
              {...register("image" ,{required:true})}
              className="input input-bordered w-full "
            />
          </div>
      <button className="btn">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
