const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  document.getElementsByClassName("btn btn-primary")[0].addEventListener('click', function(){
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
      const person = data.results[0]
      let firstName = data.results[0].name.first
      let lastName = data.results[0].name.last
      document.querySelector('h3#fullname').innerText = firstName[0].toUpperCase() + firstName.slice(1) + " " + lastName[0].toUpperCase() + lastName.slice(1)
      document.querySelector('h4#email').innerText = data.results[0].email
      document.querySelector('h4#street').innerText = data.results[0].location.street
      document.querySelector('h4#city').innerText = data.results[0].location.city
      document.querySelector('h4#state').innerText = data.results[0].location.state
      document.querySelector('h4#postcode').innerText = data.results[0].location.postcode
      document.querySelector('h4#phone').innerText = data.results[0].phone
      document.querySelector('h4#cell').innerText = data.results[0].cell
      document.querySelector('h4#date_of_birth').innerText = data.results[0].dob.date.substring(0,10)
    })
  })
  console.log("CONTENT LOADED!");
});
