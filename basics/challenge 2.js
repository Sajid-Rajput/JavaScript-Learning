alert("Welcome to the Car Game");

let carStarted = false;

while(true){
    let carAction = prompt("Enter the car Action: ");
    switch (carAction) {
        case 'start':
            if (carStarted == false){
                alert("Car is started");
                carStarted = true;
            }
            else if (carStarted == true){
                alert("Car is already started");
            }
            break;
    
        case 'stop':
            if (carStarted == true){
                alert("Car is stopped");
                carStarted = false;
            }
            else if (carStarted == false){
                alert("Car is already stopped");
            }
            break;
    
        case 'exit':
            throw'Program terminated successfully';
    
        default:
            alert("Invalid input!!!")
            break;
    }
}