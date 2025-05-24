// const form = document.forms.namedItem('form');
const BASEURL = "http://localhost:8080"

let name = document.getElementById('name')
let currency = document.getElementById('currency')


// form.onsubmit = async (e) => {
//   e.preventDefault()

//   const user = {
//     name: name.value.trim(),
//     currency: currency.value.trim(),
//   };


//   await fetch(BASEURL + "/wallets", {
//     method: "POST",
//     body: JSON.stringify(user),
//     headers: {
//       "Content-type": "application/json"
//     }
//   })

//   form.reset()

// }



import { Header } from '/src/components/Header.js'

const body = document.body
let res2 = await fetch(BASEURL + "/users")
let users2 = await res2.json()


console.log(Header());


body.prepend(Header(users2[length].email))







let button = document.querySelector(".button")

button.onclick = async () => {

  if (name.value.trim() === "" || currency.value.trim() === "") {
    alert("Пожалуйста, заполните все поля.");
    button.setAttribute("href", "#")
  } else {
    const user = {
      name: name.value.trim(),
      currency: currency.value.trim(),
    };


    await fetch(BASEURL + "/wallets", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json"
      }
    })

    window.location.href = "/pages/my_wallet/index.html"
  }
}