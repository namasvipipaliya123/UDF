function calculateAge() {
    var birthdate = document.getElementById("birthdate").value;
    
    if (!birthdate) {
        alert("Please enter your birthdate");
        return;
    }
    
    var today = new Date();
    var birthDate = new Date(birthdate);
    
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    var resultElement = document.getElementById("result");
    resultElement.textContent = "Your age is: " + age;
}
