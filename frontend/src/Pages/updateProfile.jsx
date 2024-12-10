import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "@/Redux/authSlice";
const UpdateProfile = ({ user }) => {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    bio: user?.bio || "",
    photo: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setFormData({ ...formData, photo: file });
  };

  // Handle form input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("phone", formData.phone);
      data.append("bio", formData.bio);
      if (formData.photo) {
        data.append("image", formData.photo); // Note: 'image' must match the Multer field name
      }

      const response = await axios.put(
        "http://localhost:5000/api/update",
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);

      if (response.status === 200) {
        alert("User updated successfully");
        dispatch(setUser(response.data.user));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Update Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="w-44 rounded-full inline-block">
          {/* <img
            src={user?.photo}
            alt={`${user?.name} Image`}
            className="object-cover h-full w-full"
          /> */}
          <img
            src={`http://localhost:5000/${user?.photo}`}
            alt={`${user?.name} Image`}
            className="object-cover h-full w-full"
          />
        </div>
        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            className="input input-bordered w-full"
            required
            disabled
          />
        </div>
        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">Phone</label>
          <input
            type="text"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        {/* Bio */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">Bio</label>
          <textarea
            id="bio"
            value={formData.bio}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            required
          />
        </div>
        {/* Image */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">Profile Photo</label>
          <input
            type="file"
            accept="image/*"
            id="photo"
            onChange={handleFileChange}
            className="file-input"
          />
        </div>
        {/* Submit Button */}
        <div className="flex justify-end">
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
