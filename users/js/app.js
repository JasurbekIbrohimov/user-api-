const form = document.getElementById("form");
const formButton = document.querySelector(".form__button-inner");
const user = document.getElementById("user");
const deleteBtn = document.getElementById("delete__btn");
const clearBtn = document.getElementById("clear__button");
const input = document.getElementById("form__input");




input.addEventListener("input",()=>{
    const seorchInput = input.value;
    const name = document.querySelectorAll(".name");
    name.forEach((item) =>{
        console.log(item.parentElement.parentElement);

        if(!item.textContent.toLowerCase().includes(seorchInput)){
            item.parentElement.parentElement.classList.add("hidden")
        }else{
            item.parentElement.parentElement.classList.remove("hidden")

        }
    })
})


const updetaUi = (data) => {
  data.forEach((item) => {
    const { gender, name, picture, location, dob, phone } = item;
    user.innerHTML += `
        <li class="user__item">
            <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
            </button>

            <img class="user__img" alt="User photo" src="${picture.medium}" width="100"
            height="100" />

            <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span class="name">${name.title} ${name.first} ${name.last}</span>
            </div>
            <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span> ${dob.age} years .</span>
            </div>
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span> ${location.city} ${location.state}</span>
            </div>
            <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span> ${gender} </span>
            </div>
            <div class="user__phone">
            <span class="material-symbols-outlined">phone</span>
                <span> ${phone} </span>
            </div>
        </li>
        
        `;
  });
};

input.addEventListener("input",()=>{
    const seorchInput = input.value;
    const name = document.querySelectorAll(".name");
    name.forEach((item) =>{
        console.log(item.parentElement.parentElement);

        if(!item.textContent.toLowerCase().includes(seorchInput)){
            item.parentElement.parentElement.classList.add("hidden")
        }else{
            item.parentElement.parentElement.classList.remove("hidden")

        }
    })
})


formButton.addEventListener("click",(e)=>{
    e.preventDefault()
    getData(API);    
    clearBtn.classList.remove("hidden")
})

clearBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    user.innerHTML =  "";
    clearBtn.classList.add("hidden");
})

deleteBtn.addEventListener("click",(e)=>{
    if(e.target.classList[0]=== "user__delet--btn"){
        e.target.parentElement.remove()
    }
    // if(!user.children.length){
    //     clearBtn.classList.add("hidden")
    // }
})






