const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();

// Middleware to authenticate a user
const authBearerMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const [strategy, jwt] = authorization.split(" ");
    if (strategy.toLowerCase() !== "bearer") {
      throw new Error("Invalid strategy");
    }

    const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
    req.auth = payload;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ message: "You are not authenticated. Please log in again" });
    return;
  }
};

// Middleware to assert if the role of the user gives them authorization to access the desired endpoint
const isValidRole = (role) => (req, res, next) => {
  if (req.auth?.role === role) {
    next();
  } else {
    res.status(403).json({ message: "You are not authorized admin" });
  }
};

// Middleware to assert if the user can access the desired endpoint
const isValidUser = (email) => async (req, res, next) => {
  email = req.auth.email;
  if (req.auth?.email === email) {
    next();
  } else {
    res.status(403).json({ message: "You are not authorized 1" });
  }
};

// Middleware to assert if the user can access the desired endpoint
const isValidUserID = (id) => async (req, res, next) => {
  id = req.params.id || req.body.id;
  console.log(id);
  console.log(req.auth.id);
  if (req.auth?.id == id) {
    next();
  } else {
    res.status(403).json({ message: "You are not authorized 2" });
  }
};

module.exports = {
  authBearerMiddleware,
  isValidRole,
  isValidUser,
  isValidUserID,
};
