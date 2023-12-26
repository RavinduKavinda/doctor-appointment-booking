import jwt from "jsonwebtoken";
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
        const token = authToken.split(" ")[1];

        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.userID = decoded.id;
        req.role = decoded.role;

        next();

    } catch (err) {
        if(err.name === "TokenExpiredError"){
            return res
                .status(401)
                .json({
                    message: "Token is expired."
                });
        }

        return res
            .status(401)
            .json({
                success: false,
                message: "Invalid Token"
            });
    }
}

//protect the route
export const restrict = roles => async(req, res, next) => {
    const userId = req.userID;

    let user;

    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    if(patient){
        user = patient;
    }
    if(doctor){
        user = doctor;
    }

    if(!roles.includes(user.role)) {
        return res
            .status(401)
            .json({
                success:false,
                message: "You are not Authorized!"
            });
    }
    next();
}