import Jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => {

    //get token
    const authToken = req.headers.authorization;

    //check token availability
    if(!authToken || !authToken.startsWith("Bearer")) {
        return res
            .status(401)
            .json({
                success: false,
                message: "Authorization Denied, No Token."
            })
    }

    try {
        console.log(authToken);
        next();
    } catch (err) {
        
    }
}