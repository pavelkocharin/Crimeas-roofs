var modal = document.querySelector('.modal');
var overflow = document.createElement('div');
var closeBtn =  document.querySelector('.modal__close');

function openModal() {
  var height = modal.offsetHeight;
  overflow.className = "overflow";
  document.body.appendChild(overflow);
  modal.style.marginTop = - height / 2 + "px";
  modal.style.top = "50%";
}

if (!Element.prototype.remove) {
  Element.prototype.remove = function remove() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  }
}

overflow.onclick = function () {
  modal.style.top = "-100%";
  overflow.remove();
}

closeBtn.addEventListener('click', function() { 
  modal.style.top = "-100%";
  overflow.remove(); 
});
