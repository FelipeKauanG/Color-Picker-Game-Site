const iniciar = document.getElementById("iniciar")
const jogo = document.getElementById("jogo")
const red = document.getElementById("red")
const green = document.getElementById("green")
const blue = document.getElementById("blue")
const target = document.getElementById("target")
const send = document.getElementById("send")

const palpiteRed = null
const palpiteGreen = null
const palpiteBlue = null

let realRed = null
let realGreen = null
let realBlue = null

var click = 0
target.addEventListener("click", () =>{
    click + 1
    red.value = null
    green.value = null
    blue.value = null

    target.style.backgroundImage = "none"
    var value1 = parseInt(Math.random() * 255)
    var value2 = parseInt(Math.random() * 255)
    var value3 = parseInt(Math.random() * 255)

    realRed = value1
    realGreen = value2
    realBlue = value3

    target.style.backgroundColor = `rgb(${value1}, ${value2}, ${value3})`
})


send.addEventListener("click", ()=>{
    if (click == 0){
        window.alert("Clique na imagem de de '?' acima")
    }else{
        const palpiteRed = parseInt(red.value)
        const palpiteGreen = parseInt(green.value)
        const palpiteBlue = parseInt(blue.value)

        var media = ((((100 - (((realRed-palpiteRed)**2)**0.5)+(100 - ((realGreen-palpiteGreen)**2)**0.5)+(100 - ((realBlue-palpiteBlue)**2)**0.5))/3)**2)**0.5)
        window.alert(`Média: ${parseInt(media)}% Resultado: rgb(${realRed}, ${realGreen}, ${realBlue})`)
    }
    
})

