const searchInput = document.querySelector(".top input");
const alerts = document.querySelectorAll(".alert");

searchInput.addEventListener("input", function () {
    const value = searchInput.value.toLowerCase();

    alerts.forEach(function (item) {
        const text = item.textContent.toLowerCase();

        if (text.includes(value)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});