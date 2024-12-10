import React from "react";
import { Pencil } from "lucide-react";
import { useSelector } from "react-redux";
import UpdateProfile from "./UpdateProfile"; // Import the UpdateProfile component

const Profile = () => {
  const { user } = useSelector((store) => store.auth);

  console.log(user);
  return (
    <div className="max-w-4xl border mx-auto mt-5 rounded-md shadow-md">
      <div className="flex justify-between p-3 items-center">
        <div className="avatar">
          <div className="w-44 rounded-full">
            {/* <img
              src={user?.user?.photo}
              alt={`${user?.user?.name} Image`}
              className="object-cover h-full w-full"
            /> */}
            <img
              src={`http://localhost:5000/${user?.photo}`}
              alt={`${user?.name} Image`}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="border p-2 rounded-md shadow-md hover:bg-slate-100">
          {/* Open the modal */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            <Pencil />
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <UpdateProfile user={user} />{" "}
              {/* Pass the user data to the modal */}
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      <div className="p-2 text-lg my-5">
        <p className="font-semibold">
          Name: <span className="font-normal">{user.name}</span>
        </p>
        <p className="font-semibold">
          Email: <span className="font-normal">{user?.email}</span>
        </p>
        <p className="font-semibold">
          Phone: <span className="font-normal">{user?.phone}</span>
        </p>
        <p className="font-semibold">
          Bio: <span className="font-normal">{user?.bio}</span>
        </p>
      </div>
    </div>
  );
};

export default Profile;
