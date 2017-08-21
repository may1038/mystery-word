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
const rando = randomWord.length
const dash = ["_"]
const emptyArray = []

app.engine("mustache", mustache())
app.set("view engine", "mustache")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: false}))

//push result inside an empty array
//set the randomWord.length to underscores
//somehow get the randomWord to be invisible
//result is an array... loop through results.length??

app.get("/", function(req, res) {
  let result = randomWord.split("")
  res.render("index", {
    dash: dash,
    emptyArray: emptyArray,
    result: result
  })
})

app.post("/letter", function(req, res) {
  const guess = req.body.letter
  emptyArray.push(guess)
  res.redirect("/")
})

app.listen("3000", function() {
  console.log("The robots are listening, fool!")
})
