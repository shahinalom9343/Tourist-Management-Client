import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddTouristSpot = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  const handleAddSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const spot = form.spot.value;
    const country = form.country.value;
    const location = form.location.value;
    const cost = form.cost.value;
    const season = form.season.value;
    const time = form.time.value;
    const visitors = form.visitors.value;
    const description = form.description.value;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;

    const spots = {
      spot,
      country,
      location,
      cost,
      season,
      time,
      visitors,
      description,
      name,
      email,
      photoURL,
    };
    // console.log(spots);
    // send spot data to the server
    fetch("http://localhost:5000/spots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(spots),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Added Successfully !!!",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };
  return (
    <div className="px-6">
      <Helmet>
        <title>Tourism | Add Spots</title>
      </Helmet>
      {user && (
        <div>
          <h3>This is add tourist page</h3>
          <form
            className="space-y-6 px-20 py-4 rounded-xl bg-purple-200"
            onSubmit={handleAddSpot}
          >
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
                    name="cost"
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
                    type="text"
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
                    placeholder="User Name"
                    className="input input-bordered input-accent w-full"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block dark:text-gray-600">Email:</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    className="input input-bordered input-accent w-full"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="col-span-1">
                <label className="block dark:text-gray-600">Photo URL:</label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Photo URL input here"
                  className="input input-bordered input-accent w-full"
                />
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
