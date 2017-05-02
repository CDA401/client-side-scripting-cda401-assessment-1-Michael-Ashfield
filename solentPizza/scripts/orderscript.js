var form;
var total = 0;
var myList = []; //Create array


function main(){
    form = document.getElementById("order_form");
    var sizeform = form.size_area;
    var toppingform = form.topping_area;
    form.addEventListener("change", loopForm);
}

function loopForm() { //Loops whole form when any part updated
    total = 0; //Resets total so it can be recalculated
    myList = [];
    loopFormSize();
    loopFormTopping();
    console.log("total price= " + total.toFixed(2));//Total rounded to 2 decimal place
    document.getElementById("total_cost_output").innerHTML = total.toFixed(2);
}

function loopFormSize(event){ //Loops size form
    for (var i = 0; i < form.size.length; i++){
        if (form.size[i].checked){
            console.log("You selected " + form.size[i].value);
            addToOrder(form.size[i].dataset.desc); //Adds to order summery
            addToTotal(form.size[i].dataset.price); //Adds to total price
        }
    }
}

function loopFormTopping(event){ //Loops size form
    for (var i = 0; i < form.topping.length; i++){
        if (form.topping[i].checked){
            console.log("You selected " + form.topping[i].value);
            addToOrder(form.topping[i].dataset.desc); //Adds to order summery
            addToTotal(form.topping[i].dataset.price); //Adds to total price
        }
    }
}

function addToTotal(cost){
    total += parseFloat(cost);
    return total;
}



function addToOrder(item){ //Adds item to total and list FINISH ORDER SUMMERY
    myList.push(item); //add to array
    console.log(myList);
    var lLength = myList.length;
    var text = "<ul>";
    for (var i = 0; i < lLength; i++){ //pass array into text to make unordered list
        text += "<li>" + myList[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("order_output").innerHTML = text;
}