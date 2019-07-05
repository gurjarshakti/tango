// ------------- 28 June start---------------

let head = document.getElementsByTagName('header')[0];

window.onscroll = function() {

    let a = head.offsetTop;

    if(window.pageYOffset > a) {

        head.setAttribute('style', 'position: fixed; z-index: 1; width: 100%; top: 0; box-shadow: 0px 2px 15px #000;');
    }

    else {
    	head.setAttribute('style', 'position: none;');
    }
  
}
// ------------- 28 June End---------------