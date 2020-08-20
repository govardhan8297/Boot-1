//Displaying Name and Joining time

function displayName() {
    var date = new Date();
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    var name = prompt("Enter Your Name To Join:");
    alert("Hello " + name + ", Welcome To Our Kallam Club");
    document.getElementById("name").innerHTML = name + " Has Been Joined on " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " at " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + am_pm;

}



//overwriting intro-para textcontent

function myFunction() {
    var x = document.getElementById("intro-para");
    x.innerHTML = "Gulabiii";
}


//getting user Geo-Location...and alerting..


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        alert("GeoLocation is not supported on your Browser");
    }
}
function showPosition(position) {
    alert("Your Latitude: " + position.coords.latitude + " and Longitude: " + position.coords.longitude);
}


//Making the document Editable!!!


function editFunction() {
    document.designMode = "on";
}


