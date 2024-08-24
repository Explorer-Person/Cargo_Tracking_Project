const handleErrors = require("./errors/handleErrors");
const sendError = require("./errors/sendError");
const route = require("./router/route");
const cookieParser = require("cookie-parser");
const bp = require("body-parser");
const helmet = require("helmet");

const session_mw = require("./middlewares/app/session_mw");
const generateCsrf_mw = require("./middlewares/app/generate_csrf_mw");
const verifyCsrf_mw = require("./middlewares/app/verify_csrf_mw");
const cors_mw = require("./middlewares/app/cors_mw");

const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(helmet());

app.use(cors_mw);

app.use(session_mw);

app.use(express.json());
app.use(cookieParser(process.env.SESS_SECRET));
app.use(bp.urlencoded({ extended: true }));

app.use(generateCsrf_mw);

app.use(verifyCsrf_mw, route);

if (process.env.NODE_ENV === "test" || process.env.NODE_ENV === "production") {
  app.disable("etag");
  app.use(express.static(path.join(__dirname, "client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/dist/index.html"));   
  });
}

app.use("*", (req, res, next) => sendError("Page Not Found", "fail", 404, next));

app.use(handleErrors);

app.listen(PORT, (err)=>{
  if(err){
    throw new err;
  }
  return console.log("successfull connection to " + PORT);
})

