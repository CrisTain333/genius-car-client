import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import googlelogo from "../../assets/google.png";
import UserContext from "../../Contexts/Context";
import "./lgoins.css";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { loginUser, googleLogin, githubLogin } = useContext(UserContext);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };fetch(' https://genius-car-server-nine-pi.vercel.app/jwt', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
      })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              // local storage is the easiest but not the best place to store jwt token
              localStorage.setItem('genius-token', data.token);
              navigate(from, { replace: true });
          });
      })
      .catch((error) => console.log(error));
  };


  const handleGoogleLogin = () => {
    googleLogin()
      .then((user) => {
        const currentUser = {
          email: user.email,
        };fetch(' https://genius-car-server-nine-pi.vercel.app/jwt', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
      })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              // local storage is the easiest but not the best place to store jwt token
              localStorage.setItem('genius-token', data.token);
              navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        const err = error.message;
        setErrorMessage(err);
      });
  };
  const handleGitLogin = () => {
    githubLogin()
      .then((user) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const err = error.message;
        setErrorMessage(err);
      });
  };

  return (
    <div className="max-w-xl mb-6 mx-auto">
      <div className="flex items-center lg:h-screen lg:w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4 text-center">
            LOGIN
          </span>
          <form className="mb-4" onSubmit={handleSubmit}>
            <div className="mb-4 md:w-full">
              <label htmlFor="email" className="block text-xs mb-1">
                Email
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6 md:w-full">
              <label htmlFor="password" className="block text-xs mb-1">
                Password
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <input
              type="submit"
              className="bg-red-500 hover:bg--700 text-white uppercase text-sm font-semibold px-4 py-2 rounded w-full"
              value="Sing in"
            />
          </form>

          <p className="text-red-600">{errorMessage}</p>

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              aria-label="Log in with Google"
              className="p-3 rounded-sm"
              onClick={handleGoogleLogin}
            >
              <img src={googlelogo} className="w-5 h-5  fill-current" alt="" />
            </button>
            <button
              aria-label="Log in with GitHub"
              className="p-3 rounded-sm"
              onClick={handleGitLogin}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 py-2 dark:text-gray-400">
            Don't have an account?
            <Link
              rel="noopener noreferrer"
              to="/singup"
              className="underline text-red-600 px-2"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
