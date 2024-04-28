import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const AllTouristSpot = () => {
  const spots = useLoaderData();
  return (
    <div className=" md:my-6 lg:my-10">
      <Helmet>
        <title>Explore Asia | All Spots</title>
      </Helmet>
      <div className="my-4">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">
          All Tourists Spots : {spots.length}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {spots.map((spot) => (
          <div
            key={spot._id}
            className=" dark:bg-gray-100 dark:text-gray-800 shadow-xl border-2 rounded-xl mx-2 my-1"
          >
            <div className="container mx-auto lg:max-w-7xl">
              <div className="flex flex-col-reverse">
                <div className="space-y-2 md:col-span-3 bg-slate-300 p-4">
                  <h3 className="text-xl font-bold sm:text-2xl dark:text-gray-900">
                    <span className="text-orange-600"> Spot Name :</span>{" "}
                    {spot.spot}
                  </h3>
                  <p className="">
                    <span className="text-base font-bold">Cost ($) :</span>{" "}
                    {spot.cost}
                  </p>
                  <p className="">
                    <span className=" text-base font-bold">
                      Visitors/year :
                    </span>{" "}
                    {spot.visitors}
                  </p>
                  <p className="">
                    <span className="text-base font-bold">
                      Average Cost ($) :
                    </span>
                    {spot.cost}
                  </p>
                  <p className="">
                    <span className="text-base font-bold">Location</span>:{" "}
                    {spot.location}
                  </p>
                  <p className="">
                    <span className="text-base font-bold">Season :</span>
                    {spot.season}
                  </p>
                  <p className="">
                    <span className="text-base font-bold">
                      Travel Time (in days)
                    </span>
                    :{spot.time}
                  </p>
                  <div>
                    <Link
                      to={`/viewdetails/${spot._id}`}
                      className="btn text-xl w-full font-bold btn-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <img
                    src={spot.photoURL}
                    alt=""
                    className="mx-auto h-72 w-full dark:bg-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
