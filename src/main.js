import { Header } from './components/Header.js'

const body = document.body

const BASEURL = "http://localhost:8080"

console.log(Header());

let res2 = await fetch(BASEURL + "/users")
let users2 = await res2.json()

body.prepend(Header(users2[users2.length].email))