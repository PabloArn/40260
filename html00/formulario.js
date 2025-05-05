console.log("inicio")

const boton = document.getElementById("Enviar")

console.log(boton)
boton.addEventListener("click", 
    () => {
        console.log("los parámetros")
        let user=document.getElementById("user")
        let password=document.getElementById("password")
        console.log(password.value)
        console.log(user)
    }
)