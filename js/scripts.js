window.onload = function() {
  let form = document.querySelector("form");
  let fontSize = "14px";
  document.querySelector("p").style.fontSize = fontSize;
  // onSubmit function
  form.onsubmit = function(event) {
    event.preventDefault();
    // get value for form input
    const typeSomething = document.getElementById("typeSomething").value;
    console.log("Script executing");

    // turn typeSomething to uppercase, show in hidden div
    const shoutSomething = typeSomething.toUpperCase(); 
    document.querySelector("span#shoutSomething").innerText = shoutSomething; 
    document.querySelector("div#shout").removeAttribute("class");
    
    let fontSize = parseInt(document.querySelector("p").style.fontSize);
    console.log(fontSize);
    let increaseFont = parseInt(fontSize) + 1;
    console.log(increaseFont);
    let updateFontSize = increaseFont + 'px';
    console.log(updateFontSize);
    document.querySelector("p").style.fontSize = updateFontSize;
    
    // fontSize++;
     // window.alert(typeSomething.toUpperCase());
  }
}

// function increaseSize() {
//   form.onclick = fontSize + 5;
  
// }

//let newFontSize = parseInt(fontSize) + "px";
//document.querySelector("p").style.fontSize = newFontSize;