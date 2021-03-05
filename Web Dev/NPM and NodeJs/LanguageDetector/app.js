const langs = require("langs");
const franc = require("franc");
const colors = require("colors");

const input = process.argv.slice(2).join(" ");
console.log(input);
const langCode = franc(input);
console.log(langCode)
console.log(langs.where("3",langCode).name)