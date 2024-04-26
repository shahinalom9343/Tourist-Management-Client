import { useLoaderData } from "react-router-dom";

const AllTouristSpot = () => {
  const spots = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:my-6 lg:my-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">
          All Tourists Spots : {spots.length}
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">
          Here are the overall tourist spots card for selecting?adding by the
          user
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        {spots.map((spot) => (
          <section
            key={spot._id}
            className="dark:bg-gray-100 dark:text-gray-800 shadow-xl border-2 rounded-xl mx-10 my-4"
          >
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
              <div className="grid lg:gap-4 lg:grid-cols-2 lg:items-center">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                    {spot.spot}
                  </h3>
                  <p className="mt-3 text-lg dark:text-gray-600">
                    Average Cost:{spot.cost}
                  </p>
                  <div className="mt-4 space-y-12">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-8 h-8 rounded-md dark:bg-violet-600 dark:text-gray-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                          Travel Time:{spot.time} Hours.
                        </h4>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                          Preferred Season :
                          <span className="text-red">{spot.season}</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="mt-4 lg:mt-0">
                  <img
                    src="https://source.unsplash.com/random/360x480"
                    alt=""
                    className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                  />
                </div>
                <div>
                  <button className="btn btn-primary">View Details</button>
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
