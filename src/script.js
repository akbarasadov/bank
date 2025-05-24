import { Card } from "./components/Card.js"
import { Transactions } from "./components/Transaction.js"
import { reload } from "./utils/reload.js"

const BASEURL = "http://localhost:8080"

let res = await fetch(BASEURL + "/wallets")
let users = await res.json()

let place = document.querySelector(".my-wallets")

reload(users, Card, place)



let res1 = await fetch(BASEURL + "/transactions")
let users1 = await res1.json()

let place1 = document.querySelector("tbody")

reload(users1, Transactions, place1)



let res2 = await fetch(BASEURL + "/users")
let users2 = await res2.json()


let h1 = document.querySelector("h1")
let google = document.querySelector(".google")

let length = users2.length - 1


google.textContent = users2[length].email
h1.textContent = `Добро пожаловать, ${users2[length].name} ${users2[length].first_name}!`

import { Header } from '/src/components/Header.js'

const body = document.body


console.log(Header());


body.prepend(Header(users2[length].email))