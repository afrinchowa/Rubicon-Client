import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const JoinAsAdmin = () => {
    const axiosPublic = useAxiosPublic();
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
  
    const {  createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
  
    const onSubmit = (data) => {
      // console.log(data);
      createUser(data.email, data.password).then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            // console.log(" user profile info updated");
  
            // create user entry in the database
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("user added to the database");
                reset();
                Swal.fire({
                  title: "Good job!",
                  text: "User Created Successfully",
                  icon: "success",
                });
                navigate("/");
              }
            });
          })
          .catch((error) => console.log(error));
      });
    };
    return (
        <>
        <Helmet>
          <title>Rubicon | Sign Up </title>
        </Helmet>
  
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign Up now As An Admin!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Name"
                    name="name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">This field is required </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Company Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Company Name"
                    name="name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">This field is required </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Company Logo</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    placeholder=" Company Logo"
                    name="photoURL"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-600">
                       Company Logo field is required{" "}
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">This field is required </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600" role="alert">
                      Password is required
                    </p>
                  )}
                  {errors.password?.type === "minlength" && (
                    <span className="text-red-600">
                      Password must have one uppercase, one lowercase , one letter
                      and a special Charecter
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-600">
                      Password must be 6 Charecters
                    </span>
                  )}
                  {errors.password?.type === "maxlength" && (
                    <span className="text-red-600">
                      Password must be less than 20 Charecters
                    </span>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date Of Birth</span>
                  </label>
                  <input
                    type="number"
                    {...register("name", { required: true })}
                    placeholder="Date Of Birth"
                    name="name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">This field is required </span>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up "
                  />
                </div>
             
              </form>
              <p className="px-6">
                <small>
                  Already have an account <Link to="/login">Login</Link>
                </small>
              </p>
            </div>
          </div>
        </div>
      </>
    );
};

export default JoinAsAdmin;