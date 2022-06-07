var open = document.getElementById('hamburger-icon')
var close = document.getElementById('close')

window.onload = function(){
    var open = document.getElementById('hamburger-icon')
    var close = document.getElementById('close')
    open.addEventListener('click', openMenu)
    close.addEventListener('click', closeMenu)


    var menu = document.querySelector('.menu')

    function openMenu(){
    
        menu.style.top = "0vh"
        //No scroll
        document.body.style.overflow= "hidden"
        menu.style.position= "fixed"

    }

    function closeMenu(){
        menu.style.top = "-200vh"
        document.body.style.overflow= "visible"

    }

}