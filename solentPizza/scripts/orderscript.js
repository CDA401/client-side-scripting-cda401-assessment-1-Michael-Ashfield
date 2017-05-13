var form;
var total = 0;
var myList = []; //Create array
var size_selected;
var topping_selected;


function main(){
    form = document.getElementById("order_form");
    var sizeform = form.size_area;
    var toppingform = form.topping_area;
    var extraform  = form.extra_area;
    form.addEventListener("change", loopForm);
}

function loopForm() { //Loops whole form when any part updated
    total = 0; //Resets total so it can be recalculated
    myList = [];
    size_selected = false;
    topping_selected = false;
    loopFormSize();
    loopFormTopping();
    loopFormExtra();
    complete_form();
    console.log("total price= " + total.toFixed(2));//Total rounded to 2 decimal place
    document.getElementById("total_cost_output").innerHTML = "£" + total.toFixed(2);
}

function loopFormSize(event){ //Loops size form
    for (var i = 0; i < form.size.length; i++){
        if (form.size[i].checked){
            console.log("You selected " + form.size[i].value);
            addToOrder(form.size[i].dataset.desc, form.size[i].dataset.price); //Adds to order summery
            addToTotal(form.size[i].dataset.price); //Adds to total price
        }
    }
}

function loopFormTopping(event){ //Loops size form
    for (var i = 0; i < form.topping.length; i++){
        if (form.topping[i].checked){
            console.log("You selected " + form.topping[i].value);
            addToOrder(form.topping[i].dataset.desc, form.topping[i].dataset.price); //Adds to order summery
            addToTotal(form.topping[i].dataset.price); //Adds to total price
        }
    }
}

function loopFormExtra(){
    for (var i = 0; i < form.extra.length; i++){
        if (form.extra[i].checked){
            console.log("You selected " + form.extra[i].value);
            addToOrder(form.extra[i].dataset.desc, form.extra[i].dataset.price);
            addToTotal(form.extra[i].dataset.price);
        }
    }
}

function addToTotal(cost){ //Adds the item cost to total to the total
    return total += parseFloat(cost);
}

function addToOrder(item, cost){ //Adds item to total and list FINISH ORDER SUMMERY
    myList.push(item + " : £" + cost); //add to array
    console.log(myList);
    var lLength = myList.length; //get lenth of array
    var text = "<ul>";
    for (var i = 0; i < lLength; i++){ //pass array into text to make unordered list for lenth of array
        text += "<li>" + myList[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("order_output").innerHTML = text;
}

function complete_form(){ 
    for (var i = 0; i < form.size.length; i++){
        if (form.size[i].checked){
            size_selected = true;
            break; //Stops the loop as condition is met
        }
        else {
            size_selected = false;
        }
    }
   for (var i = 0; i < form.topping.length; i++){
        if (form.topping[i].checked){
            topping_selected = true;
            break;
        }
        else{
            topping_selected = false;
        }
    }
    
    if (size_selected == false){
        document.getElementById("required_size").style.display = "block";
    }
    else {
        document.getElementById("required_size").style.display = "none";
    }
    
    if (topping_selected == false){
        document.getElementById("required_topping").style.display = "block";
    }
    else{
        document.getElementById("required_topping").style.display = "none";
    }
}