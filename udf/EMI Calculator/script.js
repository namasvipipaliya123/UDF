function calculateEMI() {
    var principal = parseFloat(document.getElementById("principal").value);
    var interest = parseFloat(document.getElementById("interest").value) / 100 / 12; // Monthly interest rate
    var tenure = parseInt(document.getElementById("tenure").value);
    
    if (!principal || !interest || !tenure) {
        alert("Please enter all fields.");
        return;
    }
    
    var emi = (principal * interest * Math.pow(1 + interest, tenure)) / (Math.pow(1 + interest, tenure) - 1);
    
    var resultElement = document.getElementById("result");
    resultElement.textContent = "Your EMI is: &#8377; " + emi.toFixed(2);
}
