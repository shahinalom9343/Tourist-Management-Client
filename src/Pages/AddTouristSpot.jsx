import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const AddTouristSpot = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <div className="px-6">
      <Helmet>
        <title>Tourism | Add Spots</title>
      </Helmet>
      {user && (
        <div>
          <h3>This is add tourist page</h3>
          <form className="space-y-6 px-20 py-4 rounded-xl bg-purple-200">
            <div className="space-y-1 text-sm">
              <div className="grid gap-4 grid-cols-2">
                <div className="col-span-1">
                  {" "}
                  <label className="block dark:text-gray-600">
                    Spot Name :
                  </label>
                  <input
                    type="text"
                    name="spot"
                    placeholder="Enter your preferrable spots"
                    className="input input-bordered input-accent w-full"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block dark:text-gray-600">
                    Country_Name :
                  </label>
                  <input
                    type="text"
                    name="country"
                    placeholder="Country you want to tour"
                    className="input input-bordered input-accent w-full"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-1 text-sm ">
              <div className=" gap-4 grid grid-cols-2">
                {" "}
                <div className="col-span-1">
                  <label className="block dark:text-gray-600">Location :</label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter your name"
                    className="input input-bordered input-accent w-full"
                  />
                </div>
                <div className="col-span-1">
                  {" "}
                  <label className="block dark:text-gray-600">
                    Average_Cost:
                  </label>
                  <input
                    type="number"
                    name="name"
                    placeholder="Your Budget"
                    className="input input-bordered input-accent w-full"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-1 text-sm ">
              <div className=" gap-4 grid grid-cols-2">
                {" "}
                <div className="col-span-1">
                  <label className="block dark:text-gray-600">
                    Seasonability :
                  </label>
                  <input
                    type="text"
                    name="season"
                    placeholder="Choose Preferrable Season"
                    className="input input-bordered input-accent w-full"
                  />
                </div>
                <div className="col-span-1">
                  {" "}
                  <label className="block dark:text-gray-600">
                    Travel Time (Days) :
                  </label>
                  <input
                    type="number"
                    name="time"
                    placeholder="Time of Travel"
                    className="input input-bordered input-accent w-full"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <div className="grid grid-cols-2 gap-4">
                {" "}
                <div className="col-span-1">
                  <label className="block dark:text-gray-600">
                    Viistors(Per Year) :
                  </label>
                  <input
                    type="text"
                    name="visitors"
                    placeholder="Average Visitors"
                    className="input input-bordered input-accent w-full"
                  />
                </div>
                <div className="col-span-1">
                  {" "}
                  <label className="block dark:text-gray-600">
                    Short Description :
                  </label>
                  <input
                    type="checkbox"
                    name="description"
                    placeholder="short des"
                    className="input input-bordered input-accent w-full"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-1 text-sm ">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  {" "}
                  <label className="block dark:text-gray-600">
                    User Name :
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user.displayName}
                    className="input input-bordered input-accent w-full"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block dark:text-gray-600">
                    User Email :
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user.email}
                    className="input input-bordered input-accent w-full"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1">
              <button className="btn btn-accent w-full">Add</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddTouristSpot;
