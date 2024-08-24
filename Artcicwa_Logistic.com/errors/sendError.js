module.exports = (errMessage, status, statusCode, next)=>{
    const err = new Error(errMessage);
    err.status = status;
    err.statusCode = statusCode;
    return next(err);
}