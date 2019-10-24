// 1: Set the text of the <h1> element

var header1 = document.querySelector("h1")
header1.append("Hello World")

// 2: Set the color of the <h1> to a different color

header1.style.color = "blue"

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag

var description = document.querySelector(".desc")
description.append("The quick brown fox jumped over the lazy dog.")

// 4: Set the class of the <ul> to 'list'

document.getElementsByTagName("ul").className = "list"

// 5: Create a new list item and add it to the <ul>

var newListItem = document.createElement("LI")
var newInput = document.createElement("input")
newListItem.appendChild(newInput)
var itemText = document.createTextNode(" Coca-Cola")
newListItem.appendChild(itemText)
var ul = document.querySelector("ul")
ul.appendChild(newListItem)

// 6: Change all <input> elements from text fields to checkboxes
inputs = document.querySelectorAll("input")

for (let i = 0; i < inputs.length; i++) {
    inputs[i].type = "checkbox"
}


// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>

var button = document.createElement("BUTTON")
button.innerHTML = "Delete"
var extra = document.querySelector(".extra")
extra.appendChild(button)

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
button.addEventListener("click", function(){
    extra.remove()
})