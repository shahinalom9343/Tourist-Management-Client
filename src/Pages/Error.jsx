import { Link } from "react-router-dom";
import ErrorImage from "../assets/error.png";
import { Helmet } from "react-helmet-async";

const Error = () => {
  return (
    <div className="flex items-center h-full dark:bg-gray-50 dark:text-gray-800">
      <Helmet>
        <title>Explore Asia | ErrorPage</title>
      </Helmet>
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-2 dark:text-gray-400">
            <img src={ErrorImage} alt="Error Image" />
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we could not find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to="/"
            rel="noopener noreferrer"
            className="px-8 py-3 font-semibold rounded bg-violet-700 text-white dark:bg-violet-600 dark:text-gray-50"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
