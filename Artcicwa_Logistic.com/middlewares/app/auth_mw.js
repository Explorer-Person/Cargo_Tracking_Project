module.exports = (req,res,next)=>{
    if(!req.session.isAuthenticated){
        res.status(403).json({
            status: "fail",
            msg: "Customer Not Authorized...",
        })
    }
    next();
}