import { Card } from '../../src/components/Card.js'
import { reload } from '../../src/utils/reload.js'
import { Header } from '/src/components/Header.js'


const BASEURL = "http://localhost:8080"

let res = await fetch(BASEURL + "/wallets")
let users = await res.json()

let place = document.querySelector(".my-wallets")

reload(users, Card, place)



const body = document.body
let res2 = await fetch(BASEURL + "/users")
let users2 = await res2.json()

let length = users2.length - 1

console.log(Header());

body.prepend(Header(users2[length].email))

let google = document.querySelector(".google")



google.textContent = users2[length].email