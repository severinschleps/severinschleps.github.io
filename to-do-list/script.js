var j = 0;

 function fetchtext() {
    //get text input field
    var i = document.getElementById("textinput1").value;
    //check if input empty
    if (i == 0){
        alert("asdffas");
        return false;
    }
    if (i != 0){
        j++;        
    }
    //append li
    document.getElementById("list1").innerHTML += '<li id="li' + j + '">' + i + '<button type="button" onclick="clearEntry(this);">clear</button></li>';
    // clears input field text
    document.getElementById("textinput1").value = "";
    gsap.fromTo("#li" + j, {x: -20}, {duration: 1, x: 0});

}





////////////////
function clearEntry(id){
    function removeElement(element) {
        if (typeof(element) === "string") {
          element = document.querySelector(element);
        }
        return function() {
          element.parentNode.removeChild(element);
        };
      }
        tl = new TimelineMax();
        tl.fromTo(id.parentElement, {x: 0}, {duration: 1, x: -20});
        tl.call(removeElement(id.parentElement));
}
////////////////





/////////////////

//document.getElementById("submitbutton1").addEventListener("click", function(){ alert("Hello World!"); });

/*
function(event){
    if(event.key === "Enter"){
    
    alert("asdfasdfasdfdasdfas");
   // fetchtext();
}

}*/



/// ANIMATION


