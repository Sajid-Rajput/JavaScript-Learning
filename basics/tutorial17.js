console.log("JavaScript Events");

let getElement = document.getElementById("headingID").addEventListener("click",
 function redirect(x) {
    // console.log("You clicked on to the heading");
    // location.href = ('https://www.google.com');
    // console.log(x.offsetX);
    // console.log(x.offsetY);
    // console.log(x.clientX);
    // console.log(x.clientY);
    // console.log(x.target.id);   
    // console.log(x);   
    let listener = x.target;
    // listener = listener.className;
    listener = Array.from(listener.classList);
    listener.forEach(function(element){
        console.log(element);
    });
    console.log(listener);
});
