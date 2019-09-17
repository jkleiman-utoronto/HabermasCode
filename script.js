function setup () {
  let h = document.querySelector('#hello'); 
  if (h) {
    h.innerHTML = 'Hey where did this text come from? can you find it in the code? Can you change it?';
    h.classList.add('bugout');
  }
  document.getElementsByClassName('button')[0].onclick = function() {
    if(this.innerHTML === 'Click Me') 
    { 
      this.innerHTML = 'Make it Stop!';
      this.classList.toggle('do-transition');
    } else {
      this.innerHTML = 'Click Me';
      this.classList.toggle('do-transition');
    }  
  };
}


window.onload = setTimeout(setup, 3000);


