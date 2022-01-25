let i = 1
var img = window.document.getElementById("numero")

function avancar(){
    i++
    if(i === 1){
        img.src = "imagens/num1.png"
    }else if(i === 2){
        img.src = "imagens/num2.png"
    }else if(i === 3){
        img.src = "imagens/num3.png"
    }else if(i === 4){
        img.src = "imagens/num4.png"
    }else if(i === 5){
        img.src = "imagens/num5.png"
    }else if(i === 6){
        img.src = "imagens/num6.png"
    }else if(i === 7){
        img.src = "imagens/num7.png"
        i = 0
    }
}

