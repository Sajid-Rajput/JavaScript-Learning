console.log("Exercise 13 extension");

let linkInnerText = document.getElementsByTagName("a");

linkInnerTextArray = Array.from(linkInnerText);

linkInnerTextArray.forEach(function(element) {
    linkText = element.innerText;
    if(linkText.toLowerCase().includes('python')){
        console.log(linkText);
    }
});