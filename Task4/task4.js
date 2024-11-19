let cars = []; // Array to store student objects
let choice;

do {
    choice = parseInt(prompt("Enter 1 to Add the car , Enter 2 to display the car , Enter 3 to remove car ,and Enter 0 to quit the program."));

    if(choice === 1){
        addCar();
    }

    if(choice === 2){
        displayCar();
    }

    if(choice === 3){
        removecar();
    }

} while (choice !== 0);
alert("Exiting program.");

// Function for adding the car 
function addCar(){
    let name = prompt("Enter car name")
    let model = prompt("Enter car model")
    cars.push({name, model})
}

// Function for displaying the car
function displayCar(){
    if(cars.length === 0){
        alert("no cars in the showroom")
    }
    else {
        let carsList = cars.map(car => car.name);
        alert(carsList);
    }
}

// Function for removing the car
function removecar() {
    let name = prompt("Enter the car name:");
    let found = false; // Variable to track if the car is found

    for (let i = 0; i < cars.length; i++) {
        if (cars[i].name === name) {
            cars.splice(i, 1); // Remove the car from the array
            alert("Car is successfully removed");
            found = true; // Mark as found
            break; // Stop further iteration
        }
    }

    if (!found) {
        alert("Car is not found"); // Alert once if no match is found
    }
}
