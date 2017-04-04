

function main(){
    var form = document.getElementById("order_form");
    var sizeform = form.size_area;
    sizeform.addEventListener("change", loopform);

}
function loopform(event){ //Loops size form
    var form = document.getElementById("order_form");

    for (var i = 0; i < form.size.length; i++){
        if (form.size[i].checked){
            console.log("You selected " + form.size[i].value);
        }
    }
}