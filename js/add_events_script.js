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

// ------------- 25 June Start -----------

let info = document.getElementsByClassName('modal-body');
let myTab = document.getElementById('view-table');

info.innerHTML = '';

function showTableData() {
    
	// LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
    for (let i = 1; i < myTab.rows.length; i++) {

     	// GET THE CELLS COLLECTION OF THE CURRENT ROW.
        let objCells = myTab.rows.item(i).cells;

	}

// LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
    for (let j = 0; j < objCells.length; j++) {

        info.innerHTML = info.innerHTML + 'Your Event Booking Details are as follows: ' + objCells.item(j).innerHTML;

    }

    info.innerHTML = info.innerHTML + '<br />';

}

// ------------- 25 June End -------------