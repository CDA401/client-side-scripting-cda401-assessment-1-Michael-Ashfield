var form;

function main(){
    form = document.getElementById("contact_form");
    form.first_name.addEventListener("blur", check_first);
    form.last_name.addEventListener("blur", check_last);
    form.email.addEventListener("blur", check_email);
    form.phone.addEventListener("blur", check_number);
    form.message.addEventListener("blur", check_message);
}

function check_first(){
    var empty = false;
    var letters = false; //no numbers in name
   
    if (form.first_name.value == ""){ //if empty
        document.getElementById("first_number").style.display = "none"; //stops bug where both number and empty errors display
        document.getElementById("empty_first_name").style.display = "inline";
        empty = true;
    }
    else{
        document.getElementById("empty_first_name").style.display = "none";
        empty = false;
    }
    
    for (var i = 0; i < form.first_name.value.length; i++){
        if (isNaN(parseFloat(form.first_name.value[i])) == false){ //if i (charcter) is a number
            letters = false;
            document.getElementById("first_number").style.display = "inline";
            break; //stops numbers within words not being sdetected
        }
        else{
            document.getElementById("first_number").style.display = "none";
            letters = true;
        }
    }
    
    if (letters == true && empty == false){ //If everything is good remove checkmark
        document.getElementById("first_name_checkmark").style.color = "green";
    }
    
    else{ //else display checkmark
        document.getElementById("first_name_checkmark").style.color = "red";
    }
}

function check_last(){
    var empty = false;
    var letters = false; //no numbers in name
   
    if (form.last_name.value == ""){ //if empty
        document.getElementById("last_number").style.display = "none"; //stops bug where both number and empty errors display
        document.getElementById("empty_last_name").style.display = "inline";
        empty = true;
    }
    else{
        document.getElementById("empty_last_name").style.display = "none";
        empty = false;
    }
    
    for (var i = 0; i < form.last_name.value.length; i++){
        if (isNaN(parseFloat(form.last_name.value[i])) == false){ //if i (charcter) is a number
            letters = false;
            document.getElementById("last_number").style.display = "inline";
            break; //stops numbers within words not being sdetected
        }
        else{
            document.getElementById("last_number").style.display = "none";
            letters = true;
        }
    }
    
    if (letters == true && empty == false){ //If everything is good remove checkmark
        document.getElementById("last_name_checkmark").style.color = "green";
    }
    
    else{ //else display checkmark
        document.getElementById("last_name_checkmark").style.color = "red";
    }
}

function check_email(){
    var empty = false;
    var at = false; //needs an @ symbol
   
    if (form.email.value == ""){ //if empty
        document.getElementById("email_atsign").style.display = "none"; //stops bug where both number and empty errors display
        document.getElementById("empty_email").style.display = "inline";
        empty = true;
    }
    else{
        document.getElementById("empty_email").style.display = "none";
        empty = false;
    }
    
    for (var i = 0; i < form.email.value.length; i++){
        if (form.email.value[i] == "@"){ //if the string contains @
            at = true;
            document.getElementById("email_atsign").style.display = "none";
            break; //As soon as @ is detected move on
        }
        else{
            document.getElementById("email_atsign").style.display = "inline";
            at = false;
        }
    }
    
    if (at == true && empty == false){ //If everything is good remove checkmark
        document.getElementById("email_checkmark").style.color = "green";
    }
    
    else{ //else display checkmark
        document.getElementById("email_checkmark").style.color = "red";
    }
}  

function check_number(){
    if (form.phone.value !== ""){
        for (var i = 0; i < form.phone.value.length; i++){
            if (isNaN(parseFloat(form.phone.value[i])) == true){ //if i (charcter) is a letter
                document.getElementById("phone_letter").style.display = "inline";
                document.getElementById("phone_checkmark").style.display = "inline";
                document.getElementById("phone_checkmark").style.color = "red";
                break; //stops to prevent next number overriding letter
            }
            else{
                document.getElementById("phone_letter").style.display = "none";
                document.getElementById("phone_checkmark").style.display = "inline";
                document.getElementById("phone_checkmark").style.color = "green";
            }
        }
    }
    else{
        document.getElementById("phone_checkmark").style.display = "none";
    }
}

function check_message(){
    if (form.message.value == ""){ //if empty
        document.getElementById("empty_message").style.display = "inline";
        document.getElementById("message_checkmark").style.color = "red";
    }
    else{
        document.getElementById("empty_message").style.display = "none";
        document.getElementById("message_checkmark").style.color = "green";
    }
}
