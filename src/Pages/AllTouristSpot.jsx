import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const AllTouristSpot = () => {
  const spots = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:my-6 lg:my-10">
      <Helmet>
        <title>Explore Asia | All Spots</title>
      </Helmet>
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">
          All Tourists Spots : {spots.length}
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">
          Here are the overall tourist spots card for selecting?adding by the
          user
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {spots.map((spot) => (
          <section
            key={spot._id}
            className="dark:bg-gray-100 dark:text-gray-800 shadow-xl border-2 rounded-xl mx-2 my-1"
          >
            <div className="container py-2 mx-auto lg:px-3 lg:max-w-7xl">
              <div className="grid grid-cols-5">
                <div className="col-span-3">
                  <h3 className="text-2xl font-bold sm:text-2xl dark:text-gray-900">
                    {spot.spot}
                  </h3>
                  <p className="mt-3 text-lg dark:text-gray-600">
                    Average Cost:{spot.cost}
                  </p>
                  <div className="mt-4 space-y-12">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-8 h-8 rounded-md dark:bg-violet-600 dark:text-gray-50"></div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                          Travel Time:{spot.time} Hours.
                        </h4>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                          Preferred Season :
                          <span className="text-red">{spot.season}</span>
                        </h4>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                          Preferred Season :
                          <span className="text-red">{spot.season}</span>
                        </h4>
                      </div>
                      <div>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <img
                    src={spot.photoURL}
                    alt=""
                    className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
