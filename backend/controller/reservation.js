import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, time, date } = req.body;
  if (!firstName || !lastName || !email || !phone || !time || !date) {
    console.log("Missing required fields");
    return next(new ErrorHandler("Please fill full reservation form!", 400));
  }
  try {
    console.log("Creating reservation");
    await Reservation.create({ firstName, lastName, email, phone, time, date });
    console.log("Reservation created successfully");
    res.status(200).json({
      success: true,
      message: "Reservation sent successfully!",
    });
  } catch (error) {
    console.log("Error occurred:", error);
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(","), 400));
    }
    next(error);
  }
};
