export function Transactions(item) {
    let tr = document.createElement("tr")

    // let td1 = document.createElement("td")
    // let td2 = document.createElement("td")
    // let td3 = document.createElement("td")
    // let td4 = document.createElement("td")
    // let td5 = document.createElement("td")

    // td1.innerHTML = item.id
    // td2.innerHTML = item.wallet
    // td3.innerHTML = item.categorie
    // td4.innerHTML = item.sum
    // td5.innerHTML = item.date

    // tr.append(td1, td2, td3, td4, td5)

    tr.innerHTML = `
              <tr>
            <td>${item.id}</td>
            <td>${item.wallet}</td>
            <td>${item.categorie}</td>
            <td>${item.sum}</td>
            <td>${item.date}</td>
          </tr>
    `

    return tr
}