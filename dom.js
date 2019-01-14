
const crazyButtons = document.querySelectorAll('.btn');
const btnCrazy=document.querySelector("#heart");
btnCrazy.addEventListener('click', happyFace);
function happyFace(){
 btnCrazy.innerHTML='GOOD CHOICE';
 btnCrazy.style.top='170px';
 btnCrazy.style.marginRight= '120px';
 btnCrazy.style.transform="rotate(-360deg)";
 btnCrazy.style.borderRadius='25px';
 btnCrazy.style.width='150px'
}





// functions
function moveButton () {
  // get a randeom number for left offset
  // random num for top offset
  const offsetLeft = (Math.random()) * (window.innerWidth - this.clientWidth);
  const offsetTop = (Math.random()) * (window.innerHeight - this.clientHeight);
  
  // apply the numbers
  this.style.top = offsetTop + '2px';
  this.style.left = offsetLeft + '2px';
}

// Add eventlistener
crazyButtons.forEach(button => button.addEventListener('mouseover', moveButton));