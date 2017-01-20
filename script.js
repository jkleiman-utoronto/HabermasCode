if (document.getElementById('hello')) {
  document.getElementById('hello').innerHTML = 'Hey where did this text come from? can you find it in the code? Can you change it?';
}

var crazyEl = document.getElementById('bad-news');

// document.getElementsByClassName('button')[0].onclick = function() {
//   if(this.innerHTML === 'Click Me') 
//   { 
//     this.innerHTML = 'Pause';
//     crazyEl.classList.add('horizTranslate');
//   } else {
//     this.innerHTML = 'Click Me';
//     var computedStyle = window.getComputedStyle(crazyEl),
//         marginLeft = computedStyle.getPropertyValue('margin-left');
//     crazyEl.style.marginLeft = marginLeft;
//     crazyEl.classList.remove('horizTranslate');    
//   }  
// }

document.getElementsByClassName('button')[0].onclick = function() {
  if(this.innerHTML === 'Click Me') 
  { 
    this.innerHTML = 'Make it Stop!';
    crazyEl.classList.add('do-transition');
  } else {
    this.innerHTML = 'Click Me';
    var computedStyle = window.getComputedStyle(crazyEl),
        marginLeft = computedStyle.getPropertyValue('margin-left'),
        fontSize = computedStyle.getPropertyValue('font-size'),
        background = computedStyle.getPropertyValue('background-color'),
        border = computedStyle.getPropertyValue('border-color');
    // crazyEl.style.marginLeft = marginLeft;
    // crazyEl.style.fontSize = fontSize;
    // crazyEl.style.borderColor = border;
    // crazyEl.style.backgroundColor = background;
    crazyEl.classList.remove('do-transition');    
  }  
}
