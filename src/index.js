import dotenv from "dotenv"
import connectDB from "./db/index.js"
import app from "./app.js"

dotenv.config({
  path: "../.env",
})

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server started listening on ${process.env.PORT}.`)
    })

    app.on("error", (err) => {
      console.log(err)
    })
  })
  .catch((err) => {
    console.log(`DB connection error: ${err}`)
    process.exit(1)
  })
