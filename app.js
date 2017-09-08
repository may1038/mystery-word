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

app.get("/", function(req, res) {
  let winspace = false
  for (let i = 0; i < randomWord.length; i++) {
    if (emptyArray.indexOf(randomWord[i]) >= 0) {
      result[i] = randomWord[i]
    } else {
      result[i] = "_"
      winspace = true
    }
  }
  if (!winspace) {
    res.redirect("/win")
  } else {
    res.render("index", {
      emptyArray: emptyArray,
      result: result,
      dashArray: dashArray,
      randomWord: randomWord
    })
  }
})

app.post("/", function(req, res) {
  const guessWord = req.body.letter
  emptyArray.push(guessWord)
  res.redirect("/")
})

app.get("/win", function(req, res) {
  res.render("win")
})

app.listen("3000", function() {
  console.log("The robots are listening, fool!")
})
