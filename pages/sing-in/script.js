document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector(".button");

    button.onclick = async (event) => {
        event.preventDefault();

        let email = document.querySelector(".email");
        let password = document.querySelector(".password");

        if (
            email.value.trim() === "" || password.value.trim() === ""
        ) {
            alert("Пожалуйста, заполните все поля.");
            return;
        }

        const user = {
            email: email.value.trim(),
            password: password.value.trim()
        };

        try {
            const res = await fetch("http://localhost:8080/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            if (res.ok) {
                window.location.href = "/index.html";
            } else {
                const errorData = await res.json();
                alert("Ошибка: " + (errorData.message || "Неизвестная ошибка"));
            }
        } catch (error) {
            alert("Ошибка подключения: " + error.message);
        }
    };
});