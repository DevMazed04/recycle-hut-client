import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn, googleSignIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    setLoginError('');

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  }

  const handleGoogleSignIn = (event) => {
    event.preventDefault();

    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };

  return (
    <div className="text-center flex flex-col h-[550px] justify-center items-center">
      <h3 className="text-2xl text-center font-semibold text-cyan-600 mt-16"> Login Here</h3>
      <div className="shadow-xl p-5 lg:p-6 rounded-2xl border mt-5">
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              {...register("email", { required: "Please! Enter your email" })}
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
            <input
              type="password"
              className="input input-bordered w-full"
              {...register("password", {
                required: "Please! Enter your password",
              })}
            />
            {errors.password && (
              <p className="text-error font-semibold text-start mt-2">
                {errors.password?.message}
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="text-xs">Forget Password?</span>
            </label>
          </div>

          <div>
            {
              loginError &&
              <p className="text-error font-semibold">{loginError}</p>
            }
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-accent bg-cyan-500 text-white" value="login">
              Login
            </button>
          </div>
          <div className="divider">OR</div>
          <div className="form-control">
            <button className="btn btn-outline-accent" onClick={handleGoogleSignIn}>
              GOOGLE
            </button>
          </div>

          <label className="label">
            <p>
              <span className="text-xs text-center">
                New to Recycle Hut?
              </span>
              <Link to="/register">
                <span className="text-xs text-primary"> Create new account
                </span>
              </Link>
            </p>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Login;
