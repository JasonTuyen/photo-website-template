/*For Parallax Function on Intro*/
var screenSize = window.innerWidth;
if(screenSize >= 768){
    (function() {
        document.addEventListener("mousemove", parallax);
        const elem = document.querySelector(".introduction");
        function parallax(e) {
            let _w = window.innerWidth/2;
            let _h = window.innerHeight/2;
            let _mouseX = e.clientX;
            let _mouseY = e.clientY;
            let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
            let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
            let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
            let x = `${_depth3}, ${_depth2}, ${_depth1}`;
            elem.style.backgroundPosition = x;
        }
    })();
}

/*For Modal of Images*/
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a cap
var img = document.getElementsByClassName('modal_image');
for(var i=0; i<img.length; i++){
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("caption");
    img[i].addEventListener('click',function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    })
}

// Click anywhere on modal to close
myModal.onclick = function() {
    modal.style.display = "none";
}