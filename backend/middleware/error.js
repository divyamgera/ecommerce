// import HandleError from "../utils/handleError.js";

// export default (err, req, res, next)=>{
//     statusCode = err.statusCode || 500;
//     message = err.message || "Internal Server Error";

//     // Cast Error
//     if(err.name === 'CastError'){
//       const message = `This is invalid resource ${err.path}`;
//       err = new HandleError(message, 404)

//     }

//     // Duplicate key error

//     if(err.code === 11000){
//       const message = `This ${Object.keys(err.keyValue)} already registered. Please Login to Continue `;
//       err = new HandleError(message, 400);
//     }

//     res.status(err.statusCode).json({
//       success: false,
//       message: err.message
//     })

// }

export default (err, req, res, next) => {
  // Set default values
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";
  console.log("ERROR STACK:", err);

  // Cast Error (Invalid MongoDB ObjectId)
  if (err.name === "CastError") {
    message = `Invalid resource: ${err.path}`;
    statusCode = 404;
  }

  // Duplicate Key Error
  if (err.code === 11000) {
    message = `This ${Object.keys(
      err.keyValue
    )} is already registered. Please login to continue.`;
    statusCode = 400;
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};
