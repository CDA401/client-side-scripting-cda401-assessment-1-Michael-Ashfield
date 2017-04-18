var form;
var total = 0;

function main(){
    form = document.getElementById("order_form");
    var sizeform = form.size_area;
    var toppingform = form.topping_area;
    form.addEventListener("change", loopForm);
}

function loopForm() { //Loops whole form when any part updated
    total = 0 //Resets total so it can be recalculated
    loopFormSize();
    loopFormTopping();
    console.log("total price= " + total);
}

function loopFormSize(event){ //Loops size form
    for (var i = 0; i < form.size.length; i++){
        if (form.size[i].checked){
            console.log("You selected " + form.size[i].value);
            addToOrder(form.size[i]); //Adds to order summery
            addToTotal(form.size[i].dataset.price) //Adds to total price
        }
    }
}

function loopFormTopping(event){ //Loops size form
    for (var i = 0; i < form.topping.length; i++){
        if (form.topping[i].checked){
            console.log("You selected " + form.topping[i].value);
            addToOrder(form.topping[i]); //Adds to order summery
            addToTotal(form.topping[i].dataset.price) //Adds to total price
        }
    }
}

function addToTotal(cost){
    total += parseInt(cost);
    return total;
}

function addToOrder(item){ //Adds item to total and list FINISH ORDER SUMMERY
    console.log("item cost= " + item.dataset.price);
}