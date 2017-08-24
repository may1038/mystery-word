const fs = require("fs")
const words = fs
  .readFileSync("/usr/share/dict/words", "utf-8")
  .toLowerCase()
  .split("\n")

const randomWord = words[Math.floor(Math.random() * words.length)]

const result = randomWord.split("")
const dashArray = []

for (let i = 0; i < randomWord.length; i++) {
  dashArray.push("_")
}

module.exports = {
  randomWord: randomWord,
  result: result,
  dashArray: dashArray
}
