function entrar(){
    var logar = document.getElementsByClassName("logar")[0]
    logar.style.display='flex'
}
function sair(){
    var logar = document.getElementsByClassName("logar")[0]
    logar.style.display='none'
}
function atualizar(){
    var propaganda = document.getElementsByClassName("propaganda")

    var date = new Date()
    var segundos = date.getSeconds()
    console.log(segundos)

    if(segundos<5){
        propaganda[0].style.display='none'
        propaganda[1].style.display='none'
        propaganda[2].style.display='none'
        propaganda[3].style.display='flex'
        propaganda[4].style.display='none'
        propaganda[5].style.display='none'
        propaganda[6].style.display='none'
        propaganda[7].style.display='flex'
        propaganda[8].style.display='none'
        propaganda[9].style.display='none'
        propaganda[10].style.display='none'
        propaganda[11].style.display='flex'
        propaganda[12].style.display='none'
        propaganda[13].style.display='none'
        propaganda[14].style.display='none'
        propaganda[15].style.display='flex'
        propaganda[16].style.display='none'
        propaganda[17].style.display='none'
        propaganda[18].style.display='none'
        propaganda[19].style.display='flex'
        propaganda[20].style.display='none'
        propaganda[21].style.display='none'
        propaganda[22].style.display='none'
        propaganda[23].style.display='flex'
        propaganda[24].style.display='none'
        propaganda[25].style.display='none'
        propaganda[26].style.display='none'
        propaganda[27].style.display='flex'
    }else if(segundos<10){
        propaganda[3].style.display='none'
        propaganda[2].style.display='flex'
        propaganda[7].style.display='none'
        propaganda[6].style.display='flex'
        propaganda[11].style.display='none'
        propaganda[10].style.display='flex'
        propaganda[15].style.display='none'
        propaganda[14].style.display='flex'
        propaganda[19].style.display='none'
        propaganda[18].style.display='flex'
        propaganda[23].style.display='none'
        propaganda[22].style.display='flex'
        propaganda[27].style.display='none'
        propaganda[26].style.display='flex'
    }else if(segundos<15){
        propaganda[2].style.display='none'
        propaganda[1].style.display='flex'
        propaganda[6].style.display='none'
        propaganda[5].style.display='flex'
        propaganda[10].style.display='none'
        propaganda[9].style.display='flex'
        propaganda[14].style.display='none'
        propaganda[13].style.display='flex'
        propaganda[18].style.display='none'
        propaganda[17].style.display='flex'
        propaganda[22].style.display='none'
        propaganda[21].style.display='flex'
        propaganda[26].style.display='none'
        propaganda[25].style.display='flex'
    }else if(segundos<20){
        propaganda[1].style.display='none'
        propaganda[0].style.display='flex'
        propaganda[5].style.display='none'
        propaganda[4].style.display='flex'
        propaganda[9].style.display='none'
        propaganda[8].style.display='flex'
        propaganda[13].style.display='none'
        propaganda[12].style.display='flex'
        propaganda[17].style.display='none'
        propaganda[16].style.display='flex'
        propaganda[21].style.display='none'
        propaganda[20].style.display='flex'
        propaganda[25].style.display='none'
        propaganda[24].style.display='flex'
    }else if(segundos<25){
        propaganda[0].style.display='none'
        propaganda[3].style.display='flex'
        propaganda[4].style.display='none'
        propaganda[7].style.display='flex'
        propaganda[8].style.display='none'
        propaganda[11].style.display='flex'
        propaganda[12].style.display='none'
        propaganda[15].style.display='flex'
        propaganda[16].style.display='none'
        propaganda[19].style.display='flex'
        propaganda[20].style.display='none'
        propaganda[23].style.display='flex'
        propaganda[24].style.display='none'
        propaganda[27].style.display='flex'
    }else if(segundos<30){
        propaganda[3].style.display='none'
        propaganda[2].style.display='flex'
        propaganda[7].style.display='none'
        propaganda[6].style.display='flex'
        propaganda[11].style.display='none'
        propaganda[10].style.display='flex'
        propaganda[15].style.display='none'
        propaganda[14].style.display='flex'
        propaganda[19].style.display='none'
        propaganda[18].style.display='flex'
        propaganda[23].style.display='none'
        propaganda[22].style.display='flex'
        propaganda[27].style.display='none'
        propaganda[26].style.display='flex'
    }else if(segundos<35){
        propaganda[2].style.display='none'
        propaganda[1].style.display='flex'
        propaganda[6].style.display='none'
        propaganda[5].style.display='flex'
        propaganda[10].style.display='none'
        propaganda[9].style.display='flex'
        propaganda[14].style.display='none'
        propaganda[13].style.display='flex'
        propaganda[18].style.display='none'
        propaganda[17].style.display='flex'
        propaganda[22].style.display='none'
        propaganda[21].style.display='flex'
        propaganda[26].style.display='none'
        propaganda[25].style.display='flex'
    }else if(segundos<40){
        propaganda[1].style.display='none'
        propaganda[0].style.display='flex'
        propaganda[5].style.display='none'
        propaganda[4].style.display='flex'
        propaganda[9].style.display='none'
        propaganda[8].style.display='flex'
        propaganda[13].style.display='none'
        propaganda[12].style.display='flex'
        propaganda[17].style.display='none'
        propaganda[16].style.display='flex'
        propaganda[21].style.display='none'
        propaganda[20].style.display='flex'
        propaganda[25].style.display='none'
        propaganda[24].style.display='flex'
    }else if(segundos<45){
        propaganda[0].style.display='none'
        propaganda[3].style.display='flex'
        propaganda[4].style.display='none'
        propaganda[7].style.display='flex'
        propaganda[8].style.display='none'
        propaganda[11].style.display='flex'
        propaganda[12].style.display='none'
        propaganda[15].style.display='flex'
        propaganda[16].style.display='none'
        propaganda[19].style.display='flex'
        propaganda[20].style.display='none'
        propaganda[23].style.display='flex'
        propaganda[24].style.display='none'
        propaganda[27].style.display='flex'
    }else if(segundos<50){
        propaganda[3].style.display='none'
        propaganda[2].style.display='flex'
        propaganda[7].style.display='none'
        propaganda[6].style.display='flex'
        propaganda[11].style.display='none'
        propaganda[10].style.display='flex'
        propaganda[15].style.display='none'
        propaganda[14].style.display='flex'
        propaganda[19].style.display='none'
        propaganda[18].style.display='flex'
        propaganda[23].style.display='none'
        propaganda[22].style.display='flex'
        propaganda[27].style.display='none'
        propaganda[26].style.display='flex'
    }else if(segundos<55){
        propaganda[2].style.display='none'
        propaganda[1].style.display='flex'
        propaganda[6].style.display='none'
        propaganda[5].style.display='flex'
        propaganda[10].style.display='none'
        propaganda[9].style.display='flex'
        propaganda[14].style.display='none'
        propaganda[13].style.display='flex'
        propaganda[18].style.display='none'
        propaganda[17].style.display='flex'
        propaganda[22].style.display='none'
        propaganda[21].style.display='flex'
        propaganda[26].style.display='none'
        propaganda[25].style.display='flex'
    }else if(segundos<60){
        propaganda[1].style.display='none'
        propaganda[0].style.display='flex'
        propaganda[5].style.display='none'
        propaganda[4].style.display='flex'
        propaganda[9].style.display='none'
        propaganda[8].style.display='flex'
        propaganda[13].style.display='none'
        propaganda[12].style.display='flex'
        propaganda[17].style.display='none'
        propaganda[16].style.display='flex'
        propaganda[21].style.display='none'
        propaganda[20].style.display='flex'
        propaganda[25].style.display='none'
        propaganda[24].style.display='flex'
    }
}

function carregarMais(){
    var nosso_time_2 = document.getElementsByClassName("nosso-time-2")

    var barra_carregar = document.getElementsByClassName("barra-carregar")
    var barra_carregar_second = document.getElementsByClassName("barra-carregar-second")

    nosso_time_2[0].style.display="flex"
    barra_carregar[0].style.display="none"
    barra_carregar_second[0].style.display='block'
    
}
function carregarMais2(){
    var nosso_time_3 = document.getElementsByClassName("nosso-time-3")
    var barra_carregar_second = document.getElementsByClassName("barra-carregar-second")

    
    nosso_time_3[0].style.display="flex"
    barra_carregar_second[0].style.display='none'
    
    
}
setInterval(atualizar, 1000);