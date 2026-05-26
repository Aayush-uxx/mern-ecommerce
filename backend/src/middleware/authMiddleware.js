import jwt from "jsonwebtoken";
import users from "../models/user.js";

const authAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (!decode) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = await users.findById(decode.id).select("-password");
    console.log("User found:", req.user);
    next();
  } catch (error) {
    res.status(400).json({ message: "Unauthorized Invalid token !" });
  }
};
const adminCheck = async (req, res, next) => {
  try {
    if (!req.user || req.user.isAdmin !== true) {
      return res.status(403).json({ message: "Admin access only" });
    }
    next();
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};

export { authAdmin, adminCheck };
