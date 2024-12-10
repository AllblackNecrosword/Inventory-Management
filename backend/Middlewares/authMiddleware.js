import jwt from "jsonwebtoken";
import { User } from "../Models/userModel.js";

// const Protect = async (req, res) => {
//   try {
//     const token = req.cookies.token;
//     console.log(token);

//     if (!token) {
//       res.status(401).json("Token Not Found");
//     }

//     // Verify token
//     const verify = jwt.verify(token, process.env.JWT);
//     console.log("Token being verified:", token);
//     console.log("JWT Secret:", process.env.JWT);
//     console.log("Decoded Token:", verify);

//     // Get user id form token
//     const user = await User.findById(verify.id).select("-password");

//     if (!user) {
//       res.status(401).json("User not found");
//     }
//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).json(error);
//   }
// };

// export default Protect;
const Protect = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    // console.log(token);
    if (!token) {
      return res.status(401).json("Token Not Found");
    }

    // Verify token
    const verify = jwt.verify(token, process.env.JWT);

    const user = await User.findById(verify.id).select("-password");
    if (!user) {
      return res.status(401).json("User not found");
    }
    req.user = user; // Attach user to request
    next(); // Pass to the next middleware/route
  } catch (error) {
    // if (error.name === "TokenExpiredError") {
    //   return res
    //     .status(401)
    //     .json({ message: "Token Expired. Please log in again." });
    // }
    console.error("Authorization Error:", error);
    res.status(401).json({ message: "Not Authorized", error });
  }
};
export default Protect;
