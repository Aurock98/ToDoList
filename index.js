
let input = document.querySelector(".input")
let botonAgregar = document.querySelector(".boton-agregar")
let container = document.querySelector(".container")

// MOVIMIENTO 
let textWrapper = document.querySelector('h1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: 'h1 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  })


  //TO-DO Logica
class Item {
    constructor(nuevaTarea) {

        this.crearDiv(nuevaTarea)

    }

    crearDiv(nuevaTarea) {

        let divItem = document.createElement("div")
        divItem.classList.add("item")

        let inputItem = document.createElement("input")
        inputItem.type = "text"
        inputItem.disabled = true
        inputItem.classList.add("item-input")
        inputItem.value = nuevaTarea

        let botonEditar = document.createElement("button")
        botonEditar.innerHTML = "<i class='fa-solid fa-lock'></i>"
        botonEditar.classList.add("boton-editar")

        botonEditar.addEventListener("click", function () {

            inputItem.disabled = !inputItem.disabled

            if (inputItem.disabled === true) {
                botonEditar.innerHTML = "<i class='fa-solid fa-lock'></i>"
            } else {
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>"
            }
        })


        let botonRemover = document.createElement("button")
        botonRemover.innerHTML = "<i class='fa-solid fa-trash-can'></i>"
        botonRemover.classList.add("boton-remover")

        botonRemover.addEventListener("click", function () {
            divItem.remove()
            
        })

        divItem.appendChild(inputItem)
        divItem.appendChild(botonEditar)
        divItem.appendChild(botonRemover)
        container.appendChild(divItem)

    }

}

function chequearInput(nuevaTarea) {

    if (input.value !== "") {
        new Item(input.value)
        input.value = ""
    } else {
        alert("Add Task")
    }

}

botonAgregar.addEventListener("click", function () {
    chequearInput(input.value)

})

input.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        chequearInput(input.value)
    }
})
