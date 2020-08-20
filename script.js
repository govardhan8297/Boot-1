function displayName() {
    var date = new Date();
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    var name = prompt("Enter Your Name To Join:");
    alert("Hello " + name + ", Welcome To Our Kallam Club");
    document.getElementById("name").innerHTML = name + " Has Been Joined on " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " at " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + am_pm;

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


