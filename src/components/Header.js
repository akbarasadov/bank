export function Header(email, pages) {

    const header = document.createElement("header")
    header.classList.add("header")

    header.innerHTML = `
    <div class="link">
      <a href="/home.html">Главная</a>
      <a href="/pages/my_wallet/index.html">Мои кошельки</a>
      <a href="/pages/my-transaction/index.html">Мои транзакции</a>
    </div>
    <div class="google_link">
      <a href="#">${email}</a>
      <a href="/index.html" class="log-out"><img src="/public/log-out.png" alt=""></a>
    </div>
    `

    return header
}