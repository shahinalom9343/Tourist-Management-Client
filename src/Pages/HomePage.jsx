import { Helmet } from "react-helmet-async";
import Countries from "../Components/Countries";
import Banner from "../Components/Banner";
import { Link, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Team from "../Components/Team";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
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
      <div data-aos="fade-up" data-aos-duration="3000">
        <div className="text-3xl font-bold text-cyan-500 text-center">
          All Tourist Spots{" "}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {spots.slice(0, 6).map((spot) => (
            <div className="card glass" key={spot._id}>
              <figure className="h-52 w-full">
                <img src={spot.photoURL} alt="Spot image" />
              </figure>
              <div className="h-44 pt-2 pl-4 bg-blue-500 text-white">
                <div className=" space-y-2">
                  {" "}
                  <h2 className=" text-3xl">{spot.spot}</h2>
                  <h2 className=" text-xl">Country : {spot.country}</h2>
                </div>
                <div className="flex justify-between mr-3">
                  <p>Location : {spot.location}</p>
                  <p>Cost : {spot.cost}</p>
                </div>

                <Link
                  to={`/viewdetails/${spot._id}`}
                  className="btn btn-warning w-11/12 mx-auto text-xl font-bold"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Countries section */}
      <div className="mx-auto text-center my-4 space-y-4 ">
        <h1 className="text-3xl text-amber-600">Categories By Country</h1>
        <div className="bg-pink-100 px-10">
          <Countries></Countries>
        </div>
      </div>
      {/* team section */}
      <div
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <Team></Team>
      </div>
    </div>
  );
};

export default HomePage;
