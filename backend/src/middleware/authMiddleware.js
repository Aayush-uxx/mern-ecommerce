import jwt from "jsonwebtoken";
import user from "../models/user.js";

const authAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(401).json({ message: "Unauthorized" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      res.status(401).json({ message: "Unauthorized" });
    }
    req.user = await user.findById(decode.id).select("password");
    next();
  } catch (error) {
    res.status(400).json({ message: "Unauthorized Invalid token !" });
  }
};
export default authAdmin;
