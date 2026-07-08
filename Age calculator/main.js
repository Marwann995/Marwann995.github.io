console.log("connected successfully");
let birthDate = document.getElementById("birth");
let button = document.getElementById("inserting");
let result = document.getElementById("result");



button.addEventListener("click", function(){
    let birth = birthDate.value;
    if (birth === ""){
        result.textContent = "please enter your birth year right";
        return;
    }
    let age = 2026 - birth
    result.textContent = "you are " + age + " years old"
})