// ------------- 24 June Start---------------

let closeIcon = document.getElementsByClassName('close');
let extraFileTwo = document.getElementById('extraFile-2');
let extraFileThree = document.getElementById('extraFile-3');
let extraFileFour = document.getElementById('extraFile-4');
let extraFileFive = document.getElementById('extraFile-5');
let addedFiles = document.getElementsByClassName('addedFiles');
let addButton = document.getElementById('addFile');
let remove = document.getElementsByClassName('close');


let z = 0;

addButton.onclick = function() {

    if(z < addedFiles.length && z < remove.length){

        addedFiles[z].style.display = 'block';
        remove[z].style.display = 'block';

        z++;

    }

}

extraFileTwo.onclick = function() {

    extraFileTwo.style.display = 'none';

}

extraFileThree.onclick = function() {

    extraFileThree.style.display = 'none';
    
}

extraFileFour.onclick = function() {

    extraFileFour.style.display = 'none';
    
}

extraFileFive.onclick = function() {

    extraFileFive.style.display = 'none';
    
}

// ------------- 24 June End---------------