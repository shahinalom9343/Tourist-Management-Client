import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

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
                alt="spot"
                className="mx-auto rounded-lg my-4  shadow-lg dark:bg-gray-500"
              />
            </div>
            <div className="cols-span-1 space-y-2 md:my-4 md:col-span-3 md: ml-5 lg:ml-16">
              <h3 className="text-2xl sm:text-2xl dark:text-gray-900">
                <span className="text-blue-600 font-bold"> Spot Name:</span>{" "}
                {spot.spot}
              </h3>
              <p className="text-base">
                <span className="text-blue-600 font-bold">Country_Name:</span>{" "}
                {spot.country}
              </p>
              <p className="text-base">
                <span className="text-blue-600 font-bold">Location:</span>{" "}
                {spot.location}
              </p>
              <p className="text-base">
                <span className="text-blue-600 font-bold">Cost($) :</span>{" "}
                {spot.cost}
              </p>
              <p className="text-base">
                <span className="text-blue-600 font-bold">Season :</span>{" "}
                {spot.season}
              </p>
              <p className="text-base">
                <span className="text-blue-600 font-bold">
                  {" "}
                  Travel Time (in days):
                </span>{" "}
                {spot.time}
              </p>
              <p className="text-base">
                <span className="text-blue-600 font-bold">
                  {" "}
                  Short Description:
                </span>{" "}
                {spot.description}
              </p>
              <p className="text-base">
                <span className="text-blue-600 font-bold">UserName:</span>{" "}
                {user.displayName}
              </p>
              <p className="text-base">
                <span className="text-blue-600 font-bold">User Email:</span>{" "}
                {user.email}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewDetails;
