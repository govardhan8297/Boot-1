function displayFunction() {
    alert("Naga How r U??");
}





function myFunction() {
    var x = document.getElementById("intro-para");
    x.innerHTML = "Gulabiii";
}


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



function editFunction() {
    document.designMode = "on";
}


