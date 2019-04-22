"use strict";

var button = document.querySelector('.button-case');
var hiddenItems = document.querySelectorAll('.item-hide');
button.addEventListener('click', function () {
  var textButton = button.innerText === 'See more' ? 'See less' : 'See more';
  button.innerHTML = button.innerHTML.replace(button.innerText, textButton);
  toggleElemetns();
});

var toggleElemetns = function toggleElemetns() {
    for(var i=0; i<hiddenItems.length;i++){
        if (hiddenItems[i].className.indexOf('item-shower') === -1) {
            hiddenItems[i].className = hiddenItems[i].className + ' item-shower';
        } else {
            hiddenItems[i].className = hiddenItems[i].className.replace(' item-shower', '');
        }
    }
};
