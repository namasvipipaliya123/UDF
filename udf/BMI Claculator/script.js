function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value) / 100; // Convert height from cm to meters
    
    if (!weight || !height) {
        alert("Please enter both weight and height.");
        return;
    }
    
    var bmi = weight / (height * height);
    
    var resultElement = document.getElementById("result");
    resultElement.textContent = "Your BMI is: " + bmi.toFixed(2);
}
