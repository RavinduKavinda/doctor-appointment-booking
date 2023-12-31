import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/bookingSchema.js";

//Doctor update
export const updateDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true}
        );

        res
            .status(200)
            .json({
                success: true,
                message: "Successfully Updated!",
                data: updatedDoctor,
            });

    } catch (error) {
         res
            .status(500)
            .json({
                success: false,
                message: "Failed to Update!",
            });
    }
}

//Doctor Delete
export const deleteDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        await Doctor.findByIdAndDelete(
            id,
        );

        res
            .status(200)
            .json({
                success: true,
                message: "Successfully Deleted!",
            });

    } catch (error) {
         res
            .status(500)
            .json({
                success: false,
                message: "Failed to Delete!",
            });
    }
}

//Single Doctor
export const getSingleDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const doctor = await Doctor.findById(id).select("-password");//hide password

        res
            .status(200)
            .json({
                success: true,
                message: "Successfully found!",
                data: doctor,
            });

    } catch (error) {
         res
            .status(404)
            .json({
                success: false,
                message: "Failed to found Doctor!",
            });
    }
}

//All Doctors
export const getAllDoctor = async (req, res) => {

    try {

        const { query } = req.query
        let doctors;

        //search panel
        if(query){
            doctors = await Doctor.find({
                isApproved: 'approved', 
                $or:[
                    {name: {$regex: query, $options: "i"}},
                    {specialization: {$regex: query, $options: "i"}}
                ]
            }).select("-password");
        } else {
            doctors = await Doctor.find({
                isApproved: 'approved', 
            }).select("-password");//hide password

        }

        res
            .status(200)
            .json({
                success: true,
                message: "Doctors found!",
                data: doctors,
            });

    } catch (error) {
         res
            .status(404)
            .json({
                success: false,
                message: "Failed to found Doctors!",
            });
    }
}

export const getDoctorProfile = async(req, res) => {
    const doctorId = req.userId;

    try {
        const doctor = await Doctor.findById(doctorId);

        if(!doctor){
            return res
                .status(404)
                .json({ success: false, message: "Doctor Not Found"});
        }

        const {password, ...rest} = doctor._doc;
        const appointments = await Booking.find({doctor:doctorId})

        res
            .status(200)
            .json({
                success: true,
                message: "Profile info is getting",
                data: {...rest, appointments},
            });
    } catch (err) {
        res
            .status(500)
            .json({ success: false, message: "Something went wrong!"})
    }
}