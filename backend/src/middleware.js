import jwt from "jsonwebtoken";
import CONFIG from "./config.js";
import { responseJson } from "./utility.js";

const authentication = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) res.send(responseJson(401, "Error! Token was not provided."));
  jwt.verify(token.split(" ")[1], CONFIG.PRIVATE_KEY, (error, decoded) => {
    if (decoded) next();
    else res.send(responseJson(401, error.message));
  });
};

export default authentication;
