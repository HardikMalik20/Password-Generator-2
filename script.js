function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

function generatePassword() {
    let name = document.getElementById("nameInput").value.trim();
    
    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    let nameParts = name.split(" ");
    let firstName = nameParts[0];
    let lastName = nameParts[nameParts.length - 1];

    let numStr = "";
    while (numStr.length < 6) {
        for (let char of firstName) {
            numStr += getRandomNumber();
            if (numStr.length >= 6){
                break;
            }     
        }
    }

    let lastThree = lastName.length >= 3 ? lastName.slice(-3).toUpperCase() : lastName.toUpperCase();
    let password = numStr + "@" + lastThree;

    document.getElementById("passwordOutput").innerText = "Generated Password: " + password;
}
document.getElementById("generateBtn").addEventListener("click", generatePassword);