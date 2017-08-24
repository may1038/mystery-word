const express = require("express")
const app = express()
const mustache = require("mustache-express")
const bodyParser = require("body-parser")
const session = require("express-session")
const validator = require("express-validator")
//exports an object words = module.exports
const words = require("./words")
// go to words.js and get the value of randomWord
const randomWord = words.randomWord
const random = randomWord.length
const emptyArray = []
const result = words.result
const dashArray = words.dashArray

app.engine("mustache", mustache())
app.set("view engine", "mustache")
app.use(express.static("public"))
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
console.log(words.result)
//push result inside an empty array
//somehow get the randomWord to be invisible
//result is an array... loop through results.length??

app.get("/", function(req, res) {
  res.render("index", {
    emptyArray: emptyArray,
    result: result,
    dashArray: dashArray
  })
})

app.post("/letter", function(req, res) {
  const guess = req.body.letter
  for (let i = 0; i < result.length; i++) {
    if (guess === result[i]) {
      dashArray[i] = result[i]
    }
  }
  emptyArray.push(guess)
  res.redirect("/")
})

app.listen("3000", function() {
  console.log("The robots are listening, fool!")
})
