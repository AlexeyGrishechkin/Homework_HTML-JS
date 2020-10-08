let stadion = document.querySelector('#imgfutb')

stadion.onclick = function (event) {

         mouseX = event.clientX;
         mouseY = event.clientY;

         document.getElementById("imgball").innerHTML = mouseX + " x " + mouseY;


         if (mouseX > (window.innerWidth - 100)) {
             setInterval((document.getElementById("imgball").style.left = (mouseX - 100) + "px"), 240);
         } else {
             setInterval((document.getElementById("imgball").style.left = mouseX + "px"), 240);
         }

         if (mouseY > (window.innerHeight - 20)) {
             document.getElementById("imgball").style.top = (mouseY - 20) + "px";
         } else {
             document.getElementById("imgball").style.top = mouseY + "px";
         }

}

