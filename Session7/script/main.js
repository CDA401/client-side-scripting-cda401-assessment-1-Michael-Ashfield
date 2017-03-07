function main() {
    console.log("In main function");
    addEventListener("submit",validateForm)
    var formValid = false
}

function validateForm(event){
    event.preventDefault();
    var myForm = document.getElementById("myForm")
    console.log("Validating Form");
    formValid = true
    if (myForm.name.value == "") {
        console.log("bgwgfrw");
        myForm.errorName.style.display = "block"
    }

    if (myForm.age.value == "") {
        console.log("bgwgfrw");
        myForm.errorAge.style.display = "block"
    }
    
}