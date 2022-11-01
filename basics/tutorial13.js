console.log("Solving exercise 1");


let links = document.links;

let arrLinks =  Array.from(links);

// arrLinks.forEach(function(elements) {
//     let saveLinks = elements.href;
//     let httpLinks = saveLinks.includes("http://");
//     if(httpLinks){
//         console.log(saveLinks);
//     }
// });

arrLinks.forEach(function(elements) {
    let saveLinks = elements.href;
    if(saveLinks.substring(0, 5) === 'http:'){
        console.log(saveLinks);
    }
});
