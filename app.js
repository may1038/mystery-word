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
const dash = "_"
const emptyArray = []


app.engine("mustache", mustache())
app.set("view engine", "mustache")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: false}))
//create an empty array that breaks the words up into individual letters (split function)



//figure out how to get underscores on your page that are equal to the length of the word thats been generated.
//get the length of the randomWord and add dash(s) for the length
//dash === rando
app.get("/", function(req, res) {
  res.render("index", {
    dash: dash,
    emptyArray: emptyArray
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
