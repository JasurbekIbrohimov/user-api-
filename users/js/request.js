// api
const API = 'https://randomuser.me/api/?results=9'

// for leader
const overlay = document.getElementById('overlay')

const getData = async (api)=>{
    overlay.classList.remove("hidden")
    const req = await fetch(api)
    const data = await req.json()
    updetaUi(data.results)
    overlay.classList.add("hidden")

}
getData(API)



