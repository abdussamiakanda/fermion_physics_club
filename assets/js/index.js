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
