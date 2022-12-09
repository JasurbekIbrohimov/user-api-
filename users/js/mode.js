const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')



const mode = localStorage.getItem("mode")
if (mode) {
    if (mode == "dark") {
        body.classList.toggle("dark-mode")
        darkBtn.classList.toggle("hidden")
        lightBtn.classList.toggle("hidden")
    }else{
        body.classList.remove("dark-mode")
    }
}


darkBtn.addEventListener("click", () => {
    darkBtn.classList.toggle("hidden")
    lightBtn.classList.toggle("hidden")
    body.classList.toggle("dark-mode")
    localStorage.setItem("mode", "dark")
})

lightBtn.addEventListener("click", () => {
    darkBtn.classList.toggle("hidden")
    lightBtn.classList.toggle("hidden")
    body.classList.toggle("dark-mode")
    localStorage.setItem("mode", "")
})
