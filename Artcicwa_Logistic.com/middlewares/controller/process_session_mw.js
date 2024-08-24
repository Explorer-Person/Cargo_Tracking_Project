exports.save_session_mw = (req, res, next, tracking_code, delivery) => {
    req.session.isAuthenticated = true;
    req.session.tracking_code = tracking_code;
    req.session.save((err) => {
      if (err) {
        sendError("Session Wasn't Saved", "fail", 500, next);
      } else {
        req.code = delivery; // It seems 'delivery' is not defined, you may want to replace it with the correct variable
        next();
      }
    });
  
};

exports.destroy_session_mw = (req, res, next) => {
  if (req.session.isAuthenticated === true) {
    return req.session.destroy((err) => {
      res.status(200).send("process reach success!");
    });
  }
};
