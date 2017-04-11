var form;
var total;

function main(){
    form = document.getElementById("order_form");
    var sizeform = form.size_area;
    sizeform.addEventListener("change", loopformsize);
}
function loopformsize(event){ //Loops size form
    form = document.getElementById("order_form");

    for (var i = 0; i < form.size.length; i++){
        if (form.size[i].checked){
            console.log("You selected " + form.size[i].value);
            addToOrder(form.size[i]);
        }
    }
}

function addToOrder(item){ //Adds item to total and list
    total += parseInt(item.dataset.price);
    console.log("total= " + total);
    
}