import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const authMiddleware = (req, res, next) => {
  // console.log("🍪 Incoming Cookies:", req.cookies);
  // console.log(req.cookies);
  // Debug log
  if (!req.cookies.token || !req.cookies) {
    return res
      .status(401)
      .json({ status: false, message: "Unauthorized: No token provided" });
  }
  const token = req.cookies.token;
  // console.log(token);
  // console.log(process.env.JWT_SECRET_KEY);
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY || "AmanIsDeveloper"
    );
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ status: false, message: "Unauthorized: Token expired" });
    } else if (error.name === "JsonWebTokenError") {
      return res
        .status(403)
        .json({ status: false, message: "Forbidden: Invalid token" });
    } else {
      return res.status(500).json({ status: false, message: "Server error" });
    }
  }
};

export default authMiddleware;
