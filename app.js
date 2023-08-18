import express from "express"
import cookieParser from "cookie-parser"
import logger from "morgan"

import apiRouter from "./api.js"

var app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())


var redirectRouter = express.Router()
redirectRouter.get("/", (req,res) => res.send("For documentation, https://github.com/adikul358/daa-recruitment-task"))
app.use("/", redirectRouter)

app.use("/api", apiRouter)

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})


export default app
