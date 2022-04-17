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

var gallery = document.querySelector('#gallery');
var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {
        item.classList.toggle('full');
    });
});
