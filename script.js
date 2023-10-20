function calculateArea() {
    const units = document.getElementById('units').value;
    let length = Number(document.getElementById('length').value);
    let width = Number(document.getElementById('width').value);

    let outputDiv = document.getElementById('output');
    if (length <= 0 || width <= 0) {
        outputDiv.innerHTML = "Please, enter the valid numbers";
        return;
    }

    let area, convertedArea;
    if (units === 'feet') {
        area = width * length;
        convertedArea = Math.round(area * 0.09290304 * 1000) / 1000;
        outputDiv.innerHTML = `You entered dimensions of ${length} feet by ${width} feet. <br> 
                               The area is ${area} square feet and ${convertedArea} square meters.`;
    } else {
        area = width * length;
        convertedArea = Math.round(area / 0.09290304 * 1000) / 1000;
        outputDiv.innerHTML = `You entered dimensions of ${length} meters by ${width} meters. <br>
                               The area is ${convertedArea} square feet and ${area} square meters.`;
    }
}
