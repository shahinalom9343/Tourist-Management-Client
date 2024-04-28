import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateInfo = () => {
  const info = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
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
  } = info;
  console.log(info);

  const handleUpdateInfo = (e) => {
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
    fetch(`https://tourism-management-server-eight.vercel.app/spots/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(spots),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Updated Info Successfully !!!",
            showConfirmButton: false,
            timer: 2000,
          });
          form.reset();
          navigate("/mylist");
        }
      });
  };

  return (
    <div className="px-6">
      <Helmet>
        <title>Explore Asia | Update UserInfo</title>
      </Helmet>

      <div>
        <form
          className="space-y-6 px-20 py-4 rounded-xl bg-purple-200"
          onSubmit={handleUpdateInfo}
        >
          <div className="space-y-1 text-sm">
            <div className="grid gap-4 grid-cols-2">
              <div className="col-span-1">
                {" "}
                <label className="block dark:text-gray-600">Spot Name :</label>
                <input
                  type="text"
                  name="spot"
                  defaultValue={spot}
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
                  defaultValue={country}
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
                  defaultValue={location}
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
                  defaultValue={cost}
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
                  defaultValue={season}
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
                  defaultValue={time}
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
                  defaultValue={visitors}
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
                  defaultValue={description}
                  className="input input-bordered input-accent w-full"
                />
              </div>
            </div>
          </div>
          <div className="space-y-1 text-sm ">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                {" "}
                <label className="block dark:text-gray-600">User Name :</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  className="input input-bordered input-accent w-full"
                />
              </div>
              <div className="col-span-1">
                <label className="block dark:text-gray-600">Email:</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={email}
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
                defaultValue={photoURL}
                className="input input-bordered input-accent w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <button className="btn btn-accent text-xl font-semibold text-white w-full">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateInfo;
