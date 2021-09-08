var price;
var quantity;
var total;

price = 6;
quantity = 12;
total = price * quantity;

var costinfo = document.getElementById('cost');
costinfo.textContent = '$' + total;