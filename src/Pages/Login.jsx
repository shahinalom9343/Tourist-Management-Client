import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // google login
  const handleGoogleSignIn = (e) => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const currentUser = result.user;
      setUser(currentUser);
      // navigate(location?.state ? location.state : "/");
      Swal.fire({
        icon: "success",
        title: "Login Successful !!!",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/");
    });
  };

  // github login
  const handleGithubLogIn = () => {
    signInWithPopup(auth, githubProvider).then((result) => {
      const currentUser = result.user;
      setUser(currentUser);
      // navigate(location?.state ? location.state : "/");
      Swal.fire({
        icon: "success",
        title: "Login Successful !!!",
        showConfirmButton: false,
        timer: 2000,
      });
    });
  };

  // facebook login
  const handleFacebookLogIn = () => {
    signInWithPopup(auth, facebookProvider).then((result) => {
      const currentUser = result.user;
      setUser(currentUser);
      // navigate(location?.state ? location.state : "/");
      Swal.fire({
        icon: "success",
        title: "Login Successful !!!",
        showConfirmButton: false,
        timer: 2000,
      });
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: "success",
          title: "Login Successful !!!",
          showConfirmButton: false,
          timer: 2000,
        });
        form.reset();
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Wrong Password",
          text: "Please input valid password !",
          footer: "",
        });
      });
  };
  return (
    <div className="border-2 shadow-md w-full max-w-md p-4 rounded-md mx-auto my-10 sm:p-8 dark:bg-gray-50 dark:text-gray-800">
      <Helmet>
        <title>Explore Asia | Login</title>
      </Helmet>
      <h2 className="mb-8 text-3xl font-bold text-center text-green-700">
        Login to your account
      </h2>
      <form className="space-y-2" onSubmit={handleSignIn}>
        <div className="space-y-2">
          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              required
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div>
            <div className="flex justify-between">
              <label htmlFor="password" className="text-lg font-medium">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              required
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full btn btn-secondary dark:bg-violet-600 dark:text-gray-50 text-2xl font-bold"
        >
          Sign in
        </button>
      </form>
      <div className="flex items-center w-full my-4 ">
        <hr className="w-full dark:text-gray-600" />
        <p className="px-3 dark:text-gray-600">OR</p>
        <hr className="w-full dark:text-gray-600" />
      </div>

      <div className="my-3 space-y-1">
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="bg-gray-600 text-white flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
        >
          <FaGoogle></FaGoogle>
          <p>Login with Google</p>
        </button>

        <button
          onClick={handleGithubLogIn}
          role="button"
          className="bg-gray-600 text-white flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
        >
          <FaGithub></FaGithub>
          <p>Login with GitHub</p>
        </button>

        <button
          onClick={handleFacebookLogIn}
          role="button"
          className="bg-gray-600 text-white flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
        >
          <FaFacebook></FaFacebook>
          <p>Login with Facebook</p>
        </button>
      </div>
      <div className="flex justify-evenly">
        {" "}
        <div>
          <p className=" text-center font-bold text-lg dark:text-gray-600">
            New Here? Please{" "}
          </p>
        </div>
        <div>
          <Link
            to="/signup"
            className=" text-lg  focus:underline hover:underline  font-bold text-cyan-400"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
