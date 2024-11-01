var setadireita = window.document.getElementById("seta-direita")
var leo = window.document.getElementById("leo")
var sama = window.document.getElementById("sama")
var bruna = window.document.getElementById("bruna")
var setaesquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
     leo.style = "display:none"
     bruna.style = "display:flex"
     setadireita.style = "display:none"
     setaesquerda.style = "display:flex; margin-top: 55px"

    }

    function RolarParaEsquerda() {
        leo.style = "diaplay:flex"
        bruna.style = "display:none"
        setadireita.style = "display:flex; margin-top: 55px"
        setaesquerda.style = "display:none"
    }