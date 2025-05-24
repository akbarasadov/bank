import { Header } from "../../src/components/Header";

const form = document.forms.namedItem('form');
const BASEURL = "http://localhost:8080"

// form.onsubmit = async (e) => {
//   e.preventDefault()


//   const user = {
//     id: Math.floor(Math.random() * 1000),
//     wallet: document.getElementById('wallet').value.trim(),
//     categorie: document.getElementById('categorie').value.trim(),
//     sum: document.getElementById('sum').value.trim(),
//     date: Math.floor(Math.random() * 3) + " дня назад"
//   };


//   const res = await fetch(BASEURL + "/transactions", {
//     method: "POST",
//     body: JSON.stringify(user),
//     headers: {
//       "Content-type": "application/json"
//     }
//   })
//   form.reset()
// }



const body = document.body
let res2 = await fetch(BASEURL + "/users")
let users2 = await res2.json()



body.prepend(Header(users2[length].email))



const button = document.querySelector(".button");


let wallet = document.getElementById('wallet')
let categorie = document.getElementById('categorie')
let sum = document.getElementById('sum')

button.onclick = async (event) => {

  if (
    wallet.value.trim() === "" ||
    categorie.value.trim() === "" ||
    sum.value.trim() === ""
  ) {
    alert("Пожалуйста, заполните все поля.");
    button.setAttribute("href", "#")
  } else {
    event.preventDefault()
    button.setAttribute("href", "/pages/my-transaction/index.html")
    const user = {
      id: Math.floor(Math.random() * 1000),
      wallet: wallet.value.trim(),
      categorie: categorie.value.trim(),
      sum: sum.value.trim(),
      date: Math.floor(Math.random() * 3) + " дня назад"
    };


    await fetch(BASEURL + "/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    window.location.href = "/pages/my-transaction/index.html"

    form.reset()
  }

}