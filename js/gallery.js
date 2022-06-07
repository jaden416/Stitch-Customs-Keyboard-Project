//window.onload = function() {

    var keyboardSelect = document.querySelectorAll('.keyboard img');
    var keyboardArray = Array.from(keyboardSelect)
    var imgSRC = keyboardArray.map(image => image.src)

    keyboardArray.forEach(image => image.addEventListener('click',keyGallery));
    //keyboardArray.forEach(image => image.addEventListener('click',removeKey));


    function keyGallery(e){
        if (e.target.alt == "keyboard1") {
            var image0 = document.getElementById('displayedIMG')
            image0.src = imgSRC[0]
        } else if (e.target.alt == "keyboard2") {
            var image1 = document.getElementById('displayedIMG')
            image1.src = imgSRC[1]
        } else if (e.target.alt == "keyboard3") {
            var image2 = document.getElementById('displayedIMG')
            image2.src = imgSRC[2]
        }else  {
            console.log("¯\_(ツ)_/¯")
        }

        
        
    }

    var lightbox = document.querySelector('.lightbox')

    keyboardArray.forEach(image => image.addEventListener("click", openGallery));
    lightbox.addEventListener("click", closeGallery);
    
    


    function openGallery(){
        lightbox.setAttribute('open', "")
        //No scroll activated
        document.body.style.overflow= "hidden"
        lightbox.style.display = "grid"
        
    }

    function closeGallery(){
        if (lightbox.style.display = "grid"){
            lightbox.setAttribute('close', "")
            lightbox.addEventListener('animationend', () =>{
                //Once the animation ends get rid of the lightbox grid that it is on top of the site.
                lightbox.removeAttribute("close");
                lightbox.style.display = "none"
                lightbox.close();
              },
              { once: true }

        
        //Scroll activated       
        ,document.body.style.overflow= "visible"
        

        

        )}
    }

//}