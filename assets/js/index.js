function showMenu(){
  document.getElementById('thebars').classList.add('hide');
  document.getElementById('dropDownMenu').style.display = 'block';
}

function goTo(path){
  window.location.assign(path);
}

var btns = ['btn0','btn1','btn2','btn3','btn4'];

var divs = ['overview','outline','notes','videos','reg'];

function show(btn){
  for(var i in btns){
    if(btns[i] === btn){
      document.getElementById(btns[i]).classList.add('selected');
      document.getElementById(divs[i]).classList.remove('hide');
    } else {
      document.getElementById(btns[i]).classList.remove('selected');
      document.getElementById(divs[i]).classList.add('hide');
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
      // customised options
      // • auto-render specific keys, e.g.:
      delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false},
          {left: '\\(', right: '\\)', display: false},
          {left: '\\[', right: '\\]', display: true}
      ],
      // • rendering keys, e.g.:
      throwOnError : false
    });
});
