import { User } from "../Models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT, { expiresIn: "1d" });
};

const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // console.log("Found User:", user);

  if (!user) {
    return res.status(400).json("user not found");
  }
  const passCheck = await bcrypt.compare(password, user.password);

  // Generate Token
  const token = generateToken(user._id);

  if (!passCheck) {
    return res.status(400).json({ message: "Invalid password" });
  }

  if (user && passCheck) {
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        // maxAge: 10 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json(user);
  }
};

const registerHandler = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill up all the fields" });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "Email has already been used" });
  }

  try {
    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      const { _id, name, email, photo, phone, bio } = user;
      return res.status(201).json({
        message: "User Created Successfully",
        _id,
        name,
        email,
        photo,
        phone,
        bio,
        token,
      });
    } else {
      return res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const logoutHandler = (req, res) => {
  try {
    res
      .status(200)
      .clearCookie("token", { httpOnly: true, path: "/" }) // Ensure cookie is cleared
      .json({ message: "Logged out Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Logout failed" });
  }
};

const updateUserHandler = async (req, res) => {
  try {
    const { name, phone, bio } = req.body;
    const userId = req.user.id;
    console.log("userID", userId);

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update fields
    if (name) user.name = name;
    if (phone) user.phone = phone;
    if (bio) user.bio = bio;

    // Handle photo upload
    if (req.file) {
      // user.photo = `/uploads/${req.file.path}`;
      user.photo = req.file.path;
    }

    await user.save();

    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred", error });
  }
};

const getLoginStatus = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json(false);
  }
  const verify = jwt.verify(token, process.env.JWT);
  if (verify) {
    return res.json(true);
  }
  return res.json(false);
};

export {
  loginHandler,
  registerHandler,
  logoutHandler,
  updateUserHandler,
  getLoginStatus,
};
