const express = require("express")
const app = express()

const Dog = require("./models/Dog")
const Person = require("./models/Person")

app.get("/dogs", async (request, response) => {
  const dogs = await Dog.query().withGraphFetched("owners")

  response.json({ dogs })
})

app.get("/owners", async (request, response) => {
  const owners = await Person.query().withGraphFetched("dogs")

  response.json({ owners })
})

app.use((error, request, response, next) => {
  console.error(error.message)

  response.sendStatus(500)
})

const port = process.env.PORT || 3000
app.listen(port, () => `Listening on port ${port}`)
