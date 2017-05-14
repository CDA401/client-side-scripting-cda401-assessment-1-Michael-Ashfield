var form;

function main(){
    form = document.getElementById("contact_form");
    form.first_name.addEventListener("blur", check_first);
    form.last_name.addEventListener("blur", check_last);
}

function check_first(){
    var empty = false;
    var letters = false; //no numbers in name
    
    for (var i = 0; i < form.first_name.value.length; i++){
        if (isNaN(parseFloat(form.first_name.value[i])) == false){ //if i  (charcter) is a number
            letters = false;
            break; //stops numbers within words not being sdetected
        }
        else{
            letters = true;
        }
    }
    
    if (form.first_name.value == ""){ //if empty display checkmark
        empty = true;
    }
    else{
        empty = false;
    }
    
    if (letters == true && empty == false){ //If everything is good remove checkmark
        document.getElementById("first_name_checkmark").style.display = "none";
    }
    
    else{ //else display checkmark
        document.getElementById("first_name_checkmark").style.display = "inline";
    }
}