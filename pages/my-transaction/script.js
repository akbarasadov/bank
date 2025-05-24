import { Transactions } from "../../src/components/Transaction.js"
import { reload } from "../../src/utils/reload.js"


const BASEURL = "http://localhost:8080"

let res = await fetch(BASEURL + "/transactions")
let users = await res.json()

let place = document.querySelector("tbody")

reload(users, Transactions, place)


import { Header } from '/src/components/Header.js'

const body = document.body
let res2 = await fetch(BASEURL + "/users")
let users2 = await res2.json()

let length = users2.length - 1

console.log(Header());

body.prepend(Header(users2[length].email))

let google = document.querySelector(".google")



google.textContent = users2[length].email