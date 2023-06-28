const display = document.querySelector(".display");
const gray = document.querySelector(".Gray--color");
const form = document.querySelector(".form");
const empty = document.querySelector(".empty");
const display2 = document.querySelector(".display2");

const form2 = document.querySelector(".form2");

display.addEventListener('click', () => {
    form2.style.display = "none"
    form.classList.add("open")
    display.classList.add("change")
    display2.classList.add("gray")
    form.classList.add("change")
    gray.classList.add("change")

    if (form2.classList.contains("open")) {
        form2.classList.remove("open")
    } else {
        form2.classList.remove("open")
    }
})

display2.addEventListener("click", () => {
    form2.classList.add("open")
    form2.style.display = "block"
    if (form.classList.contains("open")) {
        display2.classList.remove("gray")
        form.classList.remove("open")
        gray.classList.add("red")

    } else {
        form.classList.remove("open")
    }
})
