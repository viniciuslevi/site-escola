let cursos = document.querySelector('.cursos')
let cursos_opt = document.querySelector('.cursos_opt')

cursos.addEventListener('mouseover', () =>{
    cursos_opt.style.display = "unset"; //if mouse be on cursos, cursos_opt'll be visible 

    cursos_opt.addEventListener('mouseover', () =>{
        cursos_opt.style.display = "unset"; //now if mouse be on cursos_opt, 
    })

})
cursos_opt.addEventListener('mouseout', () => {
    cursos_opt.style.display = "none";
    
    cursos.addEventListener('mouseout', a => {
        cursos_opt.style.display = "none"
    })

})
//CALCULADORA

var calc_display = document.querySelector('#calc_display')
calc_display.addEventListener('click', clicou)

function clicou(){
    document.querySelector('.calculadora').style.display="unset"
}

var nt1 = document.querySelector('#nt1')
var nt2 = document.querySelector('#nt2')
var nt3 = document.querySelector('#nt3')
var nt4 = document.querySelector('#nt4')        
var exibir = document.querySelector('#exibir')

function media(){

    var n1 = Number(nt1.value)
    var n2 = Number(nt2.value)
    var n3 = Number(nt3.value)
    var n4 = Number(nt4.value)

    var media
    if(n1 ==0 || n2==0){
        return ( exibir.innerHTML = `Impossivel calcular`)
    }else if(n3 == 0 && n4 == 0){
        media = (n1 + n2)/2 
      }else if(n3 != 0 && n4 == 0){
        media = (n1+n2+n3)/3
    }else if(n3!=0 && n4 !=0){
        media = (n1 + n2 + n3 + n4)/4
    }
    exibir.innerHTML = `A sua media é ${media}`        
    
}