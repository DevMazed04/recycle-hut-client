import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { AuthContext } from "../../contexts/AuthProvider";
import Lottie from "lottie-react";
import signup from "../../signup.json";
import { TypeAnimation } from "react-type-animation";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser, updateUser, loading, setLoading, verifyEmail } =
    useContext(AuthContext);
  // const [signupError, setSignupError] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  console.log("userPassword:", userPassword.length);
  const navigate = useNavigate();

  const handleRegister = (data) => {
    // console.log(data);
    const role = data.role;
    const name = data.name;
    // const image = data.image;
    const email = data.email;
    const password = data.password;
    // setSignupError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success(`Registration successful as a ${role}`);

        const userInfo = {
          displayName: name,
        };

        updateUser(userInfo)
          .then(() => {
            verifyEmail().then(() => {
              toast.success("Please check your email for verification link");
            });
            saveUser(role, name, email);
          })
          .catch((err) => console.error(err));
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
        // setSignupError(error.message);
        setLoading(false);
      });
  };

  const saveUser = (role, name, email) => {
    const user = { role, name, email };
    fetch("https://recycle-hut-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("save user", data);
        navigate("/");
      });
  };

  return (
    <div className="lg:flex flex-row-reverse justify-around items-center gap-16  w-[80%] mx-auto">
      <div className="lg:w-[50%]  p-3">
        <Lottie animationData={signup} loop={true} />
      </div>

      <div className="text-center lg:w-[325px]">
        <h3 className="text-2xl text-center font-semibold text-cyan-600 mt-8">
          <TypeAnimation
            sequence={["Please Register", 3000]}
            speed={0}
            // wrapper="h2"
            cursor={true}
            repeat={Infinity}
          />
        </h3>

        <div className="shadow-xl p-5 lg:p-6 rounded-2xl  mt-5 border">
          <form onSubmit={handleSubmit(handleRegister)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Select Account Type</span>
              </label>
              <select
                {...register("role")}
                className="select input-bordered w-full max-w-xs font-normal"
              >
                <option value="seller">Seller Account</option>
                <option value="buyer">Buyer Account</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="input input-bordered w-full"
                {...register("name", { required: "Full Name is required" })}
              />
              {errors.name && (
                <p className="text-error font-semibold text-start mt-2">
                  {errors.name?.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="input input-bordered w-full"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-error font-semibold text-start mt-2">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex justify-center items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="input input-bordered w-full"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be six character or longer",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:
                        "Password must have uppercase, number and special characters",
                    },
                  })}
                  onChange={(e) => setUserPassword(e.target.value)}
                />

                <div
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {
                    userPassword.length !== 0
                      ? <>
                        {showPassword ? (
                          <AiFillEyeInvisible className="text-[19px] cursor-pointer ml-[-32px]" />
                        ) : (
                          <AiFillEye className="text-[19px] cursor-pointer ml-[-32px]" />
                        )}
                      </>
                      : <></>
                  }
                </div>
              </div>

              {errors.password && (
                <p className="text-error font-semibold text-start mt-2">
                  {errors.password?.message}
                </p>
              )}
            </div>

            {/* <div>
              {signupError && (
                <p className="text-error font-semibold">{signupError}</p>
              )}
            </div> */}

            <div className="form-control mt-6">
              <button
                className="btn btn-accent bg-cyan-500 text-white"
                value="register"
              >
                {loading ? (
                  <BeatLoader color="#fff" size="11" speedMultiplier=".6" />
                ) : (
                  "Register"
                )}
              </button>

              <label className="label flex justify-between items-center gap-x-1 mt-1">
                <span className="text-[13px]"> Already have an account? </span>
                <Link to="/login">
                  <span className="text-[13px] text-primary font-semibold hover:underline hover:font-bold">
                    Login Here
                  </span>
                </Link>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
