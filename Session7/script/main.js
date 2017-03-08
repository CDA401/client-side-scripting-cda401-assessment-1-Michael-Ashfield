function main() {
    console.log("In main function");
    addEventListener("submit",validateForm)
    
}

function validateForm(event){
    var formValid = true;
    var xform = document.getElementById("myForm");
    console.log("Validating Form");
   


    if (xform.Name.value == "") {
        formValid = false;
        document.getElementById("errorName").style.display = "block";
        event.preventDefault();
    }
    
    else {
        document.getElementById("errorName").style.display = "none";
        console.log("There is a name");
        
    }
    
    if (xform.Age.value == "") {
        formValid = false;
        document.getElementById("errorAge").style.display = "block";
        event.preventDefault();
    }
    
    
    else {
        document.getElementById("errorAge").style.display = "none";
        console.log("There is an age");
    }
}