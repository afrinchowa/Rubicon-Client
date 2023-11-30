import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
const {name,status,details,type,_id} =useLoaderData();

    const { register, handleSubmit, reset } = useForm();
    
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
  
    const onSubmit = async (data) => {
      console.log(data);
      //image upload to imgbb and then get an url
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log(res.data);
  
      if (res.data.success) {
          // now send the menu item data to the server with the image url
        const menuItem = {
          name: data.name,
          type: data.type,
          details: data.details,
          image: data.data.data.display_url
        };
        const menuRes = await axiosSecure.patch(`/menu/$_id`, menuItem);
        console.log(menuRes.data);
        if (menuRes.data.insertedId) {
          // show success pop up
          reset();
          Swal.fire({
            title: "Good job!",
            text: `${data.name} is updated to the menu.`,
            icon: "success",
            timer: 1500,
          });
        }
      }
    };
    
    return (
        <div>
            <SectionTitle heading="Update an Item"></SectionTitle>
            <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Asset Name</span>{" "}
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="Asset Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>{" "}
              </label>
              <select
                defaultValue={type}
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
                defaultValue={status}
                placeholder="Status"
                {...register("status", { required: true })}
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
              {...register("details", { required: true })}
              className="textarea textarea-bordered h-24"
              defaultValue={details}
              placeholder="Details"
            ></textarea>
            <div className="label">
              <span className="label-text-alt">Recipe Details</span>
              <span className="label-text-alt">Alt label</span>
            </div>
          </label>
         <div>
         <input
         {...register("image", { required: true })} type="file" className="file-input file-input-bordered file-input-primary w-full " />
         </div>
          <button className="btn">Update Menu Item</button>
        </form>
      </div>
        </div>
    );
};

export default UpdateItem;