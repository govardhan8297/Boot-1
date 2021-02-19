//Displaying Name and Joining time

function displayName() {
  var date = new Date();
  var am_pm = date.getHours() >= 12 ? "PM" : "AM";
  var name = prompt("Enter Your Name To Join:");
  var cap_name = name.toUpperCase();
  alert("Hello " + cap_name + ", Welcome To Our Kallam Club");
  document.getElementById("name").innerHTML =
    cap_name +
    " Has Been Joined on " +
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " at " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds() +
    " " +
    am_pm;

  const date = new Date();
  var am_pm = date.getHours() >= 12 ? "PM" : "AM";
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var name = prompt("Enter Your Name To Join:");
  var cap_name = name.toUpperCase();
  if (name == null || name == "") {
    alert("You says : You don't have a name");
  } else {
    alert("Hello " + cap_name + ", Welcome To Our Kallam Club");
    document.getElementById("name").innerHTML =
      cap_name +
      " Has Been Joined on " +
      date.getDate() +
      " " +
      monthNames[date.getMonth()] +
      " " +
      date.getFullYear() +
      " at " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds() +
      " " +
      am_pm;
  }
}

//overwriting intro-para textcontent

function overwriteFunction() {
  var x = document.getElementById("intro-para");
  x.innerHTML = "Hello There...!";
}

//getting user Geo-Location...and alerting..

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("GeoLocation is not supported on your Browser");
  }
}
function showPosition(position) {
  alert(
    "Your Latitude: " +
      position.coords.latitude +
      " and Longitude: " +
      position.coords.longitude
  );
}

//Making the document Editable!!!

function editFunction() {
  document.designMode = "on";
}
