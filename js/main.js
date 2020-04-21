var infoContainer = document.getElementById("info-container");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
	
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', "http://www.filltext.com/?rows=5&fname={firstName}&lname={lastName}&city={city}&pretty=true");
	ourRequest.onload = function() {
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);
	};
	ourRequest.send();
});

function renderHTML(data) {
	var htmlString = "";

	for (i=0; i < data.length; i++){
		htmlString += 
		"<div class='card'>"
		 	+ "<img class='card-img-top' src='https://images.unsplash.com/photo-1561617587-d8f3586a1d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'>"  
		 	+ "<div class='card-body'>"
			 	+ "<h5 class='card-title'>" + data[i].fname + " " + data[i].lname + "</h5>"
			 	+ "<span class='card-text'>" 
				 	+ "<p><strong>Genre</strong>: add genre here" + "</p>"
				 	+ "<p><strong>City</strong>: " + data[i].city + "</p>"
			 	+ "</span>" 
		 	+ "</div>"
		+ "</div>"
	}
	infoContainer.insertAdjacentHTML('beforeend', htmlString)
}
