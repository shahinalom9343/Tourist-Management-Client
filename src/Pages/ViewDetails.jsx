import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const { user } = useContext(AuthContext);
  const spot = useLoaderData();
  return (
    <div>
      {user && (
        <div className="container py-2 mx-auto lg:px-3 lg:max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="cols-span-1 md:col-span-2">
              <img
                src={spot.photoURL}
                alt=""
                className="mx-auto rounded-lg my-4  shadow-lg dark:bg-gray-500"
              />
            </div>
            <div className="cols-span-1 space-y-2 md:my-4 md:col-span-3 md: ml-5 lg:ml-16">
              <h3 className="text-xl font-bold sm:text-2xl dark:text-gray-900">
                <span className="text-orange-500"> Spot Name :</span>{" "}
                {spot.spot}
              </h3>
              <p className="text-lg">
                <span className="text-orange-600">Cost ($) :</span> {spot.cost}
              </p>
              <p className="text-lg">
                <span className="text-orange-600">Visitors/year :</span>{" "}
                {spot.visitors}
              </p>
              <p className="mt-3 text-lg dark:text-gray-600">
                Average Cost:{spot.cost}
              </p>
              <p className="mt-3 flex gap-1 text-lg dark:text-gray-600">
                Location : {spot.location}
              </p>
              <p className="mt-3 text-lg dark:text-gray-600">
                Season:{spot.season}
              </p>
              <p className="mt-3 text-lg dark:text-gray-600">
                Travel Time (in days):{spot.time}
              </p>
              <div>
                <Link
                  to={`/viewdetails/${spot._id}`}
                  className="btn text-xl font-bold btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewDetails;
