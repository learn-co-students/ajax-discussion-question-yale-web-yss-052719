const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  document.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
      fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => {
        const results = data["results"][0]
        const imgTag = document.querySelector("img#profile_picture")
        imgTag.src = results["picture"]["large"]
        const name = document.querySelector("h3#fullname")
        name.innerText = results["name"]["title"] + ". " + results["name"]["first"] + " " + results["name"]["last"]
        const email = document.querySelector("h4#email")
        email.innerText = results["email"]
        const street = document.querySelector("h4#street")
        street.innerText = results["location"]["street"]
        const city = document.querySelector("h4#city")
        city.innerText = results["location"]["city"]
        const state = document.querySelector("h4#state")
        state.innerText = results["location"]["state"]
        const postcode = document.querySelector("h4#postcode")
        postcode.innerText = results["location"]["postcode"]
        const phone = document.querySelector("h4#phone")
        phone.innerText = results["phone"]
        const cell = document.querySelector("h4#cell")
        cell.innerText = results["cell"]
        const dob = document.querySelector("h4#date_of_birth")
        dob.innerText = results["dob"]["date"]
      })
    }
  })
});
