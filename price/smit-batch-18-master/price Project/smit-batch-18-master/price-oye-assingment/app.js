// ===== PRODUCT LOGIC =====
const products = document.querySelectorAll(".row1, .row2");

products.forEach(product => {

    const btn = product.querySelector(".buy-btn");
    const timer = product.querySelector(".timer");

    let time = Math.floor(Math.random() * 300) + 60;

    const interval = setInterval(() => {

        let min = Math.floor(time / 60);
        let sec = time % 60;

        timer.textContent = `Sale ends in ${min}:${sec < 10 ? "0" : ""}${sec}`;

        time--;

        if (time < 0) {
            clearInterval(interval);
            timer.textContent = "Expired";
            btn.disabled = true;
            btn.textContent = "Expired";
        }

    }, 1000);

    btn.addEventListener("click", () => {
        btn.textContent = "Sold";
        btn.style.background = "gray";
        btn.disabled = true;
    });

});


