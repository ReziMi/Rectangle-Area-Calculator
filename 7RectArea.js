let units = prompt("Which units would you like to choose for your inputs? feet or meters? ").toLowerCase

if(units==='feet'){
    let length = Number(prompt("What is the length of the room in feet? "));
    let width = Number(prompt("What is the width of the room in feet? "));
    
    while(length <= 0 || width <= 0) {
        console.log("Please, enter the valid numbers");
        length = Number(prompt("What is the length of the room in feet? "));
        width = Number(prompt("What is the width of the room in feet? "));
    }
    
    const rectAreaFT = width * length;
    const rectAreaMT = Math.round(rectAreaFT * 0.09290304 * 1000) / 1000;
    
    console.log(`You entered dimensions of ${length} feet by ${width} feet.`);
    console.log(`The area is ${rectAreaFT} square feet and ${rectAreaMT} square meters.`);
}else if(units==="meters"){
    let length = Number(prompt("What is the length of the room in meters? "));
    let width = Number(prompt("What is the width of the room in meters? "));
    
    while(length <= 0 || width <= 0) {
        console.log("Please, enter the valid numbers");
        length = Number(prompt("What is the length of the room in meters? "));
        width = Number(prompt("What is the width of the room in meters? "));
    }
    
    const rectAreaMT = width * length;
    const rectAreaFT = Math.round(rectAreaMT / 0.09290304 * 1000) / 1000;
    
    console.log(`You entered dimensions of ${length} meters by ${width} meters.`);
    console.log(`The area is ${rectAreaFT} square feet and ${rectAreaMT} square meters.`);   
}else{
    console.log("Please, type correctly! 'meters' or 'feet'")
    units = prompt("Which units would you like to choose for your inputs? feet or meters? ").toLowerCase
}


