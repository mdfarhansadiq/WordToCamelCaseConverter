// Selecting DOM
const submit1 = document.getElementById("submitConv");
const submit2 = document.getElementById("submitClr");
const result = document.getElementById("result");
var txt = document.getElementById("word").value;

var finaltxt = "";
// Function
function caseConv(e) {
  e.preventDefault();
  var txt = document.getElementById("word").value;
  if (txt === "") {
    alert("Please enter at least two words");
    return false;
  } else {
    txt = txt.toLowerCase();
    for (var i = 0; i < txt.length; i++) {
      if (txt[i] === " ") {
        finaltxt += txt[i + 1].toUpperCase();
        i++;
      } else {
        finaltxt += txt[i];
      }
    }
    result.style.visibility = "visible";
    result.innerHTML = finaltxt;
  }
}

function allClear() {
  const txt = document.getElementById("word").value;
  const res = document.getElementById("result").value;

  if (txt != "" || res != "") {
    document.getElementById("word").value = "";
    document.getElementById("result").innerHTML = "";
  }
}



submit1.addEventListener("click", caseConv);
submit2.addEventListener("click", allClear);