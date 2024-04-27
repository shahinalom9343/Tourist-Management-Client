import { Helmet } from "react-helmet-async";
import Countries from "../Components/Countries";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  const spots = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Explore Asia | Home</title>
      </Helmet>
      {/* Banner section */}
      <div>
        <Banner></Banner>
      </div>

      {/* Tourist spots section */}
      <div>
        <div className="text-3xl font-bold text-cyan-500 text-center">
          All Tourist Spots{" "}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {spots.slice(0, 6).map((spot) => (
            <div className="card glass" key={spot._id}>
              <figure className="h-52 w-full">
                <img src={spot.photoURL} alt="Spot image" />
              </figure>
              <div className="card-body h-64 bg-blue-500 text-white">
                <div className=" space-y-2">
                  {" "}
                  <h2 className=" text-3xl">{spot.spot}</h2>
                  <h2 className=" text-xl">Country : {spot.country}</h2>
                </div>
                <div className=" flex justify-between">
                  <p>Location : {spot.location}</p>
                  <p>Cost : {spot.cost}</p>
                </div>

                <button className="btn btn-warning w-full text-xl font-bold">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Countries section */}
      <div className="mx-auto text-center my-10 space-y-4 ">
        <h1 className="text-3xl text-amber-600">Categories By Country</h1>
        <div className="bg-pink-100 px-10">
          <Countries></Countries>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
