const option = prompt(
  "Please enter your language's first letter"
).toLowerCase();
if (option == "a") {
  alert("Selected Azerbaijan");
} else if (option == "r") {
  alert("Selected Russian");
} else {
  alert("Wrong request");
}
