var arr=[ ];

function spaghetti() {
  var qty1 = document.getELementById('qty1').value;
  var price = qty1 * 5;
  arr.push(price);
  localstorage.setItem('a',arr);
  
}

function pizza() {
  var qty2 = document.getELementById('qty2').value;
  var price = qty2 * 3;
  arr.push(price);
  localStorage.setItem('b',arr);
  
}

function spicyChicken() {
  var qty3 = document.getELementById('qty3').value;
  var price = qty3 * 5;
  arr.push(price);
  localstorage.setItem('c',arr);
  
}

function donkatsu() {
  var qty4 = document.getELementById('qty4').value;
  var price = qty4 * 5;
  arr.push(price);
  localstorage.setItem('d',arr);
  
}

function salad() {
  var qty5 = document.getELementById('qty5').value;
  var price = qty5 * 5;
  arr.push(price);
  localstorage.setItem('e',arr);
  
}

function steak() {
  var qty6 = document.getELementById('qty6').value;
  var price = qty6 * 5;
  arr.push(price);
  localstorage.setItem('f',arr);
  
}



function checkout() {

	location.href="finalize.html";

}

function showTotal() {

	var food1 = localstorage.getItem('a');
	arr.push(food1);

	var food2 = localstorage.getItem('b');
	arr.push(food2);


	var food3 = localstorage.getItem('c');
	arr.push(food3);


	var food4 = localstorage.getItem('d');
	arr.push(food4);


	var food5 = localstorage.getItem('e');
	arr.push(food5);


	var food6 = localstorage.getItem('f');
	arr.push(food6);

	var total = food1 + food2 + food3 + food4 + food5 + food6;
	window.alert(total);

	total=0;
	for (i=0; i < arr.length;i++) {

	
 	total += arr[i];
    total * 1.04712;
    var grandTotal = total;

	} 
}




