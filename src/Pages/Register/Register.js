import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";


const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);
  const [signupError, setSignupError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (data) => {
    console.log(data);
    const role = data.role;
    const name = data.name;
    const email = data.email;
    const password = data.password;
    setSignupError('');

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success("Registration Successful..");

        const userInfo = {
          displayName: name
        }

        updateUser(userInfo)
          .then(() => {
            saveUser(role, name, email);
          })
          .catch(err => console.error(err))
      })

      .catch(error => {
        console.error(error);
        setSignupError(error.message)
      })
  };

  const saveUser = (role, name, email) => {
    const user = { role, name, email };
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        // setCreatedUserEmail(email);
        console.log('save user', data);
        navigate('/');
      })
  }


  return (
    <div>
      <div className="text-center flex flex-col h-[550px] justify-center items-center">
        <h3 className="text-2xl text-center font-semibold text-cyan-600 mt-16">Please Register</h3>
        <div className="shadow-xl p-5 lg:p-6 rounded-2xl border mt-5">
          <form onSubmit={handleSubmit(handleRegister)}>

            <div className="form-control w-full max-w-xs">
              <label className="label"> <span className="label-text">Select Account Type</span></label>
              <select
                {...register('role')}
                className="select input-bordered w-full max-w-xs font-normal">
                <option value="buyer" >Buyer Account</option>
                <option value="seller">Seller Account</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("name", { required: "Name is required" })}
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
              <input
                type="password"
                className="input input-bordered w-full"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be six character or longer",
                  },
                  pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                })}
              />
              {errors.password && (
                <p className="text-error font-semibold text-start mt-2">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <div>
              {signupError && <p className="text-error font-semibold">{signupError}</p>}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-accent bg-cyan-500 text-white" value="register">
                Register
              </button>
              <label className="label">
                <p>
                  <span className="text-xs text-center">
                    Already have an account?
                  </span>
                  <Link to="/login"> <span className="text-xs text-primary">
                    Please Log in
                  </span>
                  </Link>
                </p>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;