const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  document.addEventListener("click", function (e) {
    fetch('https://randomuser.me/api/')
    .then(res => res.json()).then(data => {
      info = data.results[0]
      let image = document.getElementById('profile_picture')
      image.src = info.picture.large

      let name = document.getElementById('fullname')
      name.innerText = `${info.name.title.toUpperCase()}. ${info.name.first.toUpperCase()} ${info.name.last.toUpperCase()}`

      let email = document.getElementById('email')
      email.innerText = info.email

      let street = document.getElementById('street')
      street.innerText = info.location.street

      let city = document.getElementById('city')
      city.innerText = info.location.city

      let state = document.getElementById('state')
      state.innerText = info.location.state

      let postcode = document.getElementById('postcode')
      postcode.innerText = info.location.postcode

      let phone = document.getElementById('phone')
      phone.innerText = info.phone

      let cell = document.getElementById('cell')
      cell.innerText = info.cell

      let date_of_birth = document.getElementById('date_of_birth')
      date_of_birth.innerText = info.dob.date
    })
  })
});
