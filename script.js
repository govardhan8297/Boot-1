function displayFunction() {
    var name = prompt("Enter Your Name To Join:");
    if (name == null || "") {
        alert("Don&apos;t ya have a Name??")
    } else {
        alert("Hello " + name + ", Welcome To Our Kallam Club");
        document.getElementById("name").innerHTML = name + " Has Been Joined.(+1)";
    }
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


