import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyList = () => {
  const mySpots = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/spots/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Explore Asia | MyList</title>
      </Helmet>
      {user && (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
          <h2 className="mb-4 text-2xl font-semibold leading-tight text-center">
            User Profile
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="w-24" />
              </colgroup>
              <thead className="dark:bg-gray-300 bg-orange-100 text-xl font-semibold">
                <tr className="text-center">
                  <th className="p-3">User</th>
                  <th className="p-3">Spot Name</th>
                  <th className="p-3">Country</th>
                  <th className="p-3">Location</th>
                  <th className="p-3 text-right">Cost ($)</th>
                  <th className="p-3">Update</th>
                  <th className="p-3">Delete</th>
                </tr>
              </thead>
              <tbody>
                {mySpots.map((mySpot) => (
                  <tr
                    key={mySpot._id}
                    className="border-b bg-gray-100 text-center text-base font-medium border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                  >
                    <td className="p-3">
                      <p>{mySpot.name}</p>
                    </td>
                    <td className="p-3">
                      <p>{mySpot.spot}</p>
                    </td>
                    <td className="p-3">
                      <p>{mySpot.country}</p>
                    </td>
                    <td className="p-3">
                      <p>{mySpot.location}</p>
                    </td>
                    <td className="p-3">
                      <p>{mySpot.cost}</p>
                    </td>
                    <td className="p-3">
                      <Link
                        to={`updateInfo/${mySpot._id}`}
                        className="btn btn-success text-white"
                      >
                        Update
                      </Link>
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => handleDelete(mySpot._id)}
                        className="btn btn-warning"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyList;
