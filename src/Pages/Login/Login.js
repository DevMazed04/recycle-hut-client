import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { AuthContext } from "../../contexts/AuthProvider";
import Lottie from "lottie-react";
import login from "../../login.json";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { TypeAnimation } from "react-type-animation";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {
    signIn,
    googleSignIn,
    updateUser,
    loading,
    setLoading,
    passwordReset,
  } = useContext(AuthContext);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  console.log("userPasswordLength:", userPassword.length);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data, event) => {
    event.preventDefault();
    const email = data.email;
    const password = event.target.password.value;
    // const password = data.password;
    // setPasswordError("");

    if (userPassword.length > 0) {
      setPasswordError("");
    }
    else {
      setPasswordError("Please Enter Your Password");
      return;
    }

    signIn(email, password)
      .then((result) => {
        // const user = result.user;
        // console.log(user);
        toast.success("Login Successful..");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
        // setPasswordError(error.message);
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Successful..");
        navigate(from, { replace: true });

        const name = user.displayName;
        const email = user.email;
        const role = "buyer";

        const userInfo = {
          name: name,
          email: email,
          role: role,
        };

        updateUser(userInfo)
          .then(() => {
            saveUser(role, name, email);
          })
          .catch((err) => console.error(err));
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
        // setPasswordError(error.message);
        setLoading(false);
      });
  };

  const handlePasswordReset = () => {
    if (!userEmail) {
      toast.error("Please enter your email to reset password");
      return;
    }
    passwordReset(userEmail)
      .then(() => {
        toast.success("please check your email for password reset link");
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
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
        // console.log("save user", data);
        // navigate("/");
      });
  };

  return (
    <div className="lg:flex justify-center items-center gap-12 w-[80%] mx-auto">
      <div className="lg:w-[60%]">
        <Lottie animationData={login} loop={true} />
      </div>

      <div className="text-center lg:w-[325px]">
        <div className="p-2 w-64 mx-auto bg-white my-5 rounded-xl shadow-md">
          <small>
            <span className="text-primary font-semibold mr-1">
              Admin Email:
            </span>
            <span className="">devmazed04@gmail.com</span>
          </small>
          <br />
          <small>
            <span className="text-primary font-semibold mr-1">
              Admin Password:
            </span>
            <span className="">12qW@!</span>
          </small>
        </div>

        <h3 className="text-2xl text-center font-semibold text-cyan-600">
          <TypeAnimation
            sequence={["Login Here", 3000]}
            speed={0}
            // wrapper="h2"
            cursor={true}
            repeat={Infinity}
          />
        </h3>

        <div className="shadow-xl p-5 lg:px-5 pb-3 rounded-2xl mt-7 border">
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="input input-bordered w-full hover:bg-cyan-100 hover:font-[500]"
                {...register("email", { required: "Please! Enter your email" })}
                onBlur={(event) => setUserEmail(event.target.value)}
              />
              {errors.email && (
                <p className="text-error font-semibold text-start mt-2 w-60">
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
                  className="input input-bordered w-full hover:bg-cyan-100 hover:font-[500]"
                  {...register(
                    "password"
                    // {
                    //   required: "Please! Enter your password",
                    // }
                  )}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
                {userPassword.length > 0 ? (
                  <span
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? (
                      <AiFillEyeInvisible className="text-[19px] cursor-pointer ml-[-32px]" />
                    ) : (
                      <AiFillEye className="text-[19px] cursor-pointer ml-[-32px]" />
                    )}
                  </span>
                ) : (
                  <></>
                )}
              </div>

              {/* {errors.password && (
                <p className="text-error font-semibold text-start mt-2 w-60">
                  {errors.password?.message}
                </p>
              )} */}

              {userPassword.length === 0 ? (
                <>
                  {passwordError && (
                    <p className="text-error font-semibold text-start mt-2 w-60">
                      {passwordError}
                    </p>
                  )}
                </>
              ) : (
                <></>
              )}

            </div>

            <div className="form-control" onClick={handlePasswordReset}>
              <label className="label">
                <span className="text-xs hover:underline hover:font-semibold hover:text-red-500 cursor-pointer">
                  Forgot Password?
                </span>
              </label>
            </div>

            {/* <div>
              {passwordError && (
                <p className="text-error font-semibold w-[284px] text-start">{passwordError}</p>
              )}
            </div> */}

            <div className="form-control mt-4">
              <button
                className="btn btn-accent bg-cyan-500 text-white hover:rounded-full hover:text-[15px]"
                value="login"
              >
                {loading ? (
                  <BeatLoader color="#fff" size="11" speedMultiplier=".6" />
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>

          <div className="divider">OR</div>

          <div className="form-control">
            <button
              className="btn btn-outline-accent hover:rounded-full hover:text-[15px]"
              onClick={handleGoogleSignIn}
            >
              <div className="flex items-center gap-5">
                <span>
                  <FcGoogle className="text-[22px]" />
                </span>
                <span>Login With Google</span>
              </div>
            </button>
          </div>

          <label className="label flex justify-between items-center gap-x-1 mt-1">
            <span className="text-[13px]"> New to Recycle Hut? </span>
            <Link to="/register">
              <span className="text-[13px] text-primary font-semibold hover:underline hover:font-bold">
                Please Register
              </span>
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
