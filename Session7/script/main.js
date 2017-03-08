function main() {
    console.log("In main function");
    addEventListener("submit",validateForm)
    var formValid = true;
}

function validateForm(event){
    event.preventDefault();
    var xform = document.getElementById("myForm");
    console.log("Validating Form");
    formValid = false;
    myForm.errorName.style.display = "block";
    
    if (xform.value == "") {
        console.log("bgwgfrw");

    }

}