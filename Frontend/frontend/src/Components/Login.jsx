/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthProvider";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [setAuthuser] = useAuth()

  const onSubmit =  async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password
    // console.log("i am fired")
    };
    await axios
      .post("http://localhost:4005/user/login", userInfo)
      .then((res) => {
        // console.log(res.data);
        if (res.data) {
          toast.success("Loggedin Successfully");
          document.getElementById("my_modal_3").close();
          localStorage.setItem("Users", JSON.stringify(res.data.user));

          setTimeout(() => {
            window.location.reload();
            console.log(res.data.user)
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-3xl text-center">Login</h3>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span className="text-xl">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-96 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
                autoComplete="on"
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
              <span className="text-xl">Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-96 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200" type="submit">
                Login
              </button>
              </div>
              <div className="text-center m-4">
                <p>
                Not registered?
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                  > 
                  Signup
                </Link>
                </p>
                </div>
              </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;