import { jokes } from "./jokes.js"

console.log(jokes)
console.log('running')
var jokeButton = document.getElementById("jokeBtn")

jokeButton.onclick = function() { 
    var e = document.getElementById("select-form");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    var personalJokes = jokes[text]
    var joke = personalJokes[Math.floor(Math.random()*personalJokes.length)];
    document.getElementById("joke").innerHTML = joke

};