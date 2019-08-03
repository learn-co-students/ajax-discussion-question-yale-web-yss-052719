let fullname = document.getElementById("fullname");
let buttonTag = document.querySelector('button');
let profPic = document.getElementById("profile_picture");
let emailTag = document.getElementById("email");
let street = document.getElementById("street");
let city = document.getElementById("city");
let state = document.getElementById("state");
let postcode = document.getElementById("postcode");
let phone = document.getElementById("phone");
let cell = document.getElementById("cell");
let dateBirth = document.getElementById("date_of_birth");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  buttonTag.addEventListener('click', function(e) {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then( data => {
     // fullname.innerHTML = data.results
     let title = data.results[0].name.title;
     let firstName = data.results[0].name.first;
     let lastName = data.results[0].name.last;
      fullname.innerHTML = title[0].toUpperCase() + title.slice(1)
      + " " + firstName[0].toUpperCase() + firstName.slice(1) +
      " " + lastName[0].toUpperCase() + lastName.slice(1)
      emailTag.innerHTML = data.results[0].email
      street.innerHTML = data.results[0].location.street
      city.innerHTML = data.results[0].location.city
      phone.innerHTML = data.results[0].phone
      cell.innerHTML = data.results[0].cell
      postcode.innerHTML = data.results[0].location.postcode
      profPic.innerHTML = data.results[0].picture
      dateBirth.innerHTML = data.results[0].dob.date
      //console.log(data.results[0])
    })
  })
});
