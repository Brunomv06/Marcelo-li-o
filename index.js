function cal(){
    let number_1 = Number(document.querySelector("#a").value)
    let number_2 = Number(document.querySelector("#b").value)
    let number_3 = Number(document.querySelector("#c").value)
    let number_4 = Number(document.querySelector("#d").value)
    let p = document.querySelector("#sim")
    p.innerHTML = `Resultado: ${number_1 + number_2 + number_3 + number_4}`
}

const butao = document.querySelector('#butao')
butao.addEventListener('click', cal)