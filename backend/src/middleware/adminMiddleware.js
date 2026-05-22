const adminCheck = async (req, res, next) => {
  try {
    if (req.user.isAdmin !== true) {
      return res.status(403).json({ message: "Admin access only" });
    }
    next();
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};
export default adminCheck;
