var form;
var good_First = false; //Used for final validation
var good_Last = false;
var good_email = false;
var good_phone = true; //Phone by default is true and only false if it is entered wrong
var good_message = false;

function main(){ //apply event listeners
    form = document.getElementById("contact_form");
    form.first_name.addEventListener("blur", check_first); //blur as change doesn't detect if it is left empty
    form.last_name.addEventListener("blur", check_last);
    form.email.addEventListener("blur", check_email);
    form.phone.addEventListener("change", check_number); //can be change as it is not required
    form.message.addEventListener("blur", check_message);
    form.addEventListener("submit", validateForm)
}


function check_first(){ //first name must not be empty and must not contain numbers
    var empty = false;
    var letters = false; //no numbers in name
    document.getElementById("first_name_checkmark").style.display = "inline"; //only display tick when interacted with
   
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
    
    if (letters == true && empty == false){ //If everything is good give green checkmark
        document.getElementById("first_name_checkmark").style.color = "green";
        form.first_name.style.color = "";
        form.first_name.style.background = "";
        good_First = true;
    }
    else{ //else display checkmark
        document.getElementById("first_name_checkmark").style.color = "red";
        form.first_name.style.color = "white";
        form.first_name.style.background = "red";
        good_First = false;
    }
}


function check_last(){ //last name must not be empty and must not contain numbers
    var empty = false;
    var letters = false; //no numbers in name
    document.getElementById("last_name_checkmark").style.display = "inline";
   
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
    
    if (letters == true && empty == false){ //If everything is good give a gree checkmark
        document.getElementById("last_name_checkmark").style.color = "green";
        form.last_name.style.color = "";
        form.last_name.style.background = "";
        good_Last = true;
    }
    else{ //else display checkmark
        document.getElementById("last_name_checkmark").style.color = "red";
        form.last_name.style.color = "white";
        form.last_name.style.background = "red";
        good_Last = false;
    }
}


function check_email(){ //email must not be empty and must include an @ sign
    var empty = false;
    var at = false; //needs an @ symbol
    document.getElementById("email_checkmark").style.display = "inline";
   
    if (form.email.value == ""){ //if empty
        document.getElementById("email_atsign").style.display = "none"; //stops bug where both number and empty errors display
        document.getElementById("empty_email").style.display = "inline";
        empty = true;
    }
    else{
        document.getElementById("empty_email").style.display = "none";
        empty = false;
    }
    
    for (var i = 0; i < form.email.value.length; i++){ // the string has an @ sign
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
    
    if (at == true && empty == false){ //If everything is good give a green checkmark
        document.getElementById("email_checkmark").style.color = "green";
        form.email.style.color = "";
        form.email.style.background = "";
        good_email = true;
    }
    else{ //else display checkmark
        document.getElementById("email_checkmark").style.color = "red";
        form.email.style.color = "white";
        form.email.style.background = "red";
        good_email = false;
    }
}  


function check_number(){ //Number may be empty, but if data is given it must be numerical to be valid
    if (form.phone.value !== ""){
        for (var i = 0; i < form.phone.value.length; i++){
            if (isNaN(parseFloat(form.phone.value[i])) == true){ //if i (charcter) is a letter or symbol (not a number) then it is invalid
                document.getElementById("phone_letter").style.display = "inline";
                document.getElementById("phone_checkmark").style.display = "inline";
                document.getElementById("phone_checkmark").style.color = "red";
                form.phone.style.color = "white";
                form.phone.style.background = "red";
                good_phone = false;
                break; //stops to prevent next number overriding letter
            }
            else{
                document.getElementById("phone_letter").style.display = "none";
                document.getElementById("phone_checkmark").style.display = "inline";
                document.getElementById("phone_checkmark").style.color = "green";
                form.phone.style.color = "";
                form.phone.style.background = "";
                good_phone = true;
            }
        }
    }
    else{ //If it is left empty
        document.getElementById("phone_letter").style.display = "none";
        document.getElementById("phone_checkmark").style.display = "none";
        form.phone.style.color = "";
        form.phone.style.background = "";
        good_phone = true; //If phone is empty then it is good
    }
}


function check_message(){ //Message must not be empty
    document.getElementById("message_checkmark").style.display = "inline";
    if (form.message.value == ""){ //if empty
        document.getElementById("empty_message").style.display = "inline";
        document.getElementById("message_checkmark").style.color = "red";
        form.message.style.background = "red";
        good_message = false;
    }
    else{
        document.getElementById("empty_message").style.display = "none";
        document.getElementById("message_checkmark").style.color = "green";
        form.message.style.background = "";
        good_message = true;
    }
}

function validateForm(event){
    event.preventDefault(); //Prevent submit
    if(good_First == true && good_Last == true && good_email == true && good_phone == true && good_message == true){ //All forms must be valid to submit
        document.getElementById("invalidForm").style.display = "none";
        console.log("Form valid, submit"); //Form has noweher to submit to, but it would submit if this site was full
    }
    else{
        check_first(); //Force each check to run to display empty forms
        check_last();
        check_email();
        check_number();
        check_message();
        document.getElementById("invalidForm").style.display = "inline";
    }
}