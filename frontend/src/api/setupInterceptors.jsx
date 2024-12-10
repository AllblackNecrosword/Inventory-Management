import { setisLoggedin, setUser } from "@/Redux/authSlice";
import axios from "axios";


// Create an Axios instance
const api = axios.create({
  baseURL: "http://localhost:5000", // Your API base URL
  withCredentials: true, // Include cookies
});

const setupInterceptors = (navigate,dispatch) => {
  api.interceptors.response.use(
    (response) => response, // Pass through successful responses
    (error) => {
      if (error.response && error.response.status === 401) {
        // Handle expired or invalid token
        alert("Session expired. Redirecting to home.");
        dispatch(setisLoggedin(false));
        dispatch(setUser(null));
        navigate("/"); // Redirect to home
      }
      return Promise.reject(error); // Pass the error to the calling code
    }
  );
};

export { api, setupInterceptors };
