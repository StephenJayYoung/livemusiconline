var infoContainer = document.getElementById("info-container");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
	
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', "http://youngcreativespace.com/bands.json");
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
		 	+ "<img class='card-img-top' src=" + data[i].image + ">"  
		 	+ "<div class='card-body'>"
			 	+ "<h5 class='card-title'>" + data[i].band_name + "</h5>"
			 	+ "<span class='card-text'>" 
				 	+ "<p><strong>Genre</strong>: " + data[i].genre + "</p>"
				 	+ "<p><strong>City</strong>: " + data[i].city + "</p>"
					+ "<a><strong>Link</strong>: " + data[i].insta_link + "</a>"
			 	+ "</span>" 
		 	+ "</div>"
		+ "</div>"
	}
	infoContainer.insertAdjacentHTML('beforeend', htmlString)
}
