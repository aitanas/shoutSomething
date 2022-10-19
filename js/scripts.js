window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    // get value for form input
    const typeSomething = document.getElementById("typeSomething").value;
    console.log("Script executing");

    // turn typeSomething to uppercase, show in hidden div
    const shoutSomething = typeSomething.toUpperCase(); 
    document.querySelector("span#shoutSomething").innerText = shoutSomething; 
    document.querySelector("div#shout").removeAttribute("class");
    
     // window.alert(typeSomething.toUpperCase());
  }
}