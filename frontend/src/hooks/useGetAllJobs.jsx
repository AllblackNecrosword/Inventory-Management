import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

import { setAllProducts } from "@/Redux/productSlice";

const useGetAllJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/product/getproduct",
          {
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          console.log(response.data);
          dispatch(setAllProducts(response.data));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllJobs();
  }, [dispatch]);
};

export default useGetAllJobs;
