function searchAJAX(str) {

	if (str.length==0)
  		{ 
  			document.getElementById("searchAJAX").innerHTML="";
  			document.getElementById("searchAJAX").style.border="0px";
  			return;
  		}


		xhr = new XMLHttpRequest();

		target = document.getElementById("searchAJAX");

		changeListener = function () {

		if(xhr.readyState == 4 && xhr.status == 200) {

		   json(xhr.responseText, target);

		} 

	};

	var price = document.getElementById("price").value;


	xhr.open("GET", "ajax/sql/searchDatabaseSQL.php?str="+str+"&price="+price, true);
	xhr.onreadystatechange = changeListener;
	xhr.send();


}


function pageLoaded(str) {
	var price = document.getElementById("price");
	var fetchbutton = document.getElementById("searchBox");

	if(fetchbutton){
		fetchbutton.addEventListener("focus", searchAJAX(str));
	}

	if(price){
		price.addEventListener("change", searchAJAX(str));
	}
}


function json(jsonObj, target) {

	target.innerHTML = "";
	var json_output = JSON.parse(jsonObj);

	//Starts the loop
	for( var i=0; i < json_output.length; i++) {
		
		var output 	= 	"<div id='item"					+ json_output[i].id 			+"' class='item'>"	+
						'<h2> Product Name: ' 			+ json_output[i].name			+ '</h2>'		+
						"<p><img src='../CMS/Images/" 	+ json_output[i].name 			+ ".jpg'> </p>" +
						'<p> Product Quantity: ' 		+ json_output[i].quantity 		+ '</p>' 		+
						'<p> Product Description: ' 	+ json_output[i].description  	+ '</p>' 		+
						'<p> Product Category: ' 		+ json_output[i].category 		+ '</p>' 		+
						'<p> Product Price: ' 			+ json_output[i].price 			+ '</p>'		+
						"</div>";

						//This outputs the array
						target.innerHTML += output;
	}
}


function injectIntoModal(data){
  var modal = document.querySelector(".modal");

  
  modal.innerHTML = data;
  toggleModal(modal);
}



function toggleModal(modal){
  modal.classList.toggle('modal--hidden');
}



function setListeners(){
  
 var itemsContainer = document.getElementById("searchAJAX");

  
 itemsContainer.addEventListener("click", function(event){
    
    var e = event.target;
    
      while(e.id.indexOf('item') == -1){
      e = e.parentNode;      
    }

    var data = e.id;

    modalAjax(data);

    
    //injectIntoModal(data);  
  
  }, false);
      
 }



function modalAjax(data) {

	// declare the two variables that will be used
	var xhr, changeListener;

	// find the element that should be updated
	//target = document.getElementById("collectInfo");

	var data = data;

	// create a request object
	xhr = new XMLHttpRequest();


	changeListener = function () {

		if (xhr.readyState === 4 && xhr.status === 200) {

			//Calls the function  JSON and puts in the response text and variale target
			jsonModal(xhr.responseText);

		} 
	};

	// initialise a request, specifying the HTTP method
	// to be used and the URL to be connected to.
	xhr.open("GET", "ajax/sql/collectProductsModalSQL.php?data="+data, true);
	xhr.onreadystatechange = changeListener;
	xhr.send();

};


function jsonModal(jsonObj) {


	var json_output = JSON.parse(jsonObj);

	//Starts the loop
	for( var i=0; i < json_output.length; i++) {
						
		var output 	= 	"<div id='item"										+	json_output[i].id  				+"' class='itemModal'>"	+
						"<h2> Product Name: " 								+ 	json_output[i].name				+ "</h2>"				+
						"<p><img src='../CMS/Images/" 						+	json_output[i].name 			+ ".jpg'></p>"			+
						"<div id='pmodal'>"																								+
						"<p class = 'bold'> Product Quantity:</p><p> " 		+ 	json_output[i].quantity 		+ "</p>" 				+
						"<p class = 'bold'> Product Description:</p><p> " 	+ 	json_output[i].description 		+ "</p>" 				+
						"<p class = 'bold'> Product Category:</p><p> " 		+ 	json_output[i].category 		+ "</p>" 				+
						"<p class = 'bold'> Product Price:</p><p> " 		+ 	json_output[i].price 			+ "</p>"				+
						"<p class = 'bold'>How many would you like</p><p><input type ='number' id ='number'></p>"						+
						"<p><input 	type='button' value='Add to Basket!' id='button'><p>" 												+									
						"</div>"																										+
						"</div>";


						
						injectIntoModal(output);
	}
}



window.addEventListener("load", setListeners());
//document.getElementById("searchBox").addEventListener('onkeyup', pageLoaded(document.getElementById("searchBox").value));