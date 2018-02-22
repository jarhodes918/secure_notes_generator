// Add a note
function addnote() {

	// Create variables
    var xhttp = new XMLHttpRequest();
	var note = {};
    
	// Check to make sure the user entered something for a subject and something for a note
	if (document.getElementById("subject").value == "" || document.getElementById("note").value == "") {

			// Alert user to make proper entry
			alert("Please enter a subject and a note");
	} else {

		// Get data
    	note.subject = document.getElementById("subject").value;
		note.note = document.getElementById("note").value;
		
		// Make the data a string
		var json = JSON.stringify(note);

		// Check state and status
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				
				// Make a console log statement
				console.log("Response: " + this.responseText);

			    // Get the response
				var result = JSON.parse(this.responseText);

			    // Alert the user that the note was successfully added
				alert("Note with subject: " + result.subject + ", was added successfully");

			    // Clear the page
				document.getElementById("subject").value = "";
				document.getElementById("note").value = "";
			}
		};
		
		// Open and send using the required header
		xhttp.open("POST", "/input", true);
		xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
		xhttp.send(json);
	}
}

// Delete a note
function deletenote() {

	// Create variables
    var xhttp = new XMLHttpRequest();

	// Check to make sure the user entered something for a subject and something for a note
	if (document.getElementById("subject").value == "") {

			// Alert user to make proper entry
			alert("Please enter a subject");
	} else {
		
		// Check state and status		
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
								
				// Make a console log statement
				console.log("Response: " + this.responseText);

			    // Get the response
				var result = JSON.parse(this.responseText);

			    // Alert the user that the note was successfully deleted
				alert("Note with subject: " + result.subject + ", was deleted successfully");

			    // Clear the page
				document.getElementById("subject").value = "";
				document.getElementById("note").value = "";
			}
		};

		// Open and send
		xhttp.open("DELETE", "/notes/" + document.getElementById("subject").value, true);
		xhttp.send();
	}
}
