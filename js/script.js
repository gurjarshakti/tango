// ------------- 18 June Start ---------------

// Code to toggle between tabs.

function contentPanel(evt, contentId) {
    
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tab-content");
    
    for (i = 0; i < tabcontent.length; i++) {
        
        tabcontent[i].style.display = "none";

    }
    
    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {

        tablinks[i].className = tablinks[i].className.replace(" active", "");

    }

    document.getElementById(contentId).style.display = "block";

    evt.currentTarget.className += " active";

}

// ------------- 18 June End------------------

// ------------- 19 June Start ---------------

// Code to toggle between event tabs.

function addEvent(evt, eventId) {

    let tabEvent = document.getElementById('add-events');
    let deleteEvent = document.getElementById('delete-events');
    let addEvent = document.getElementById('add-events-button');
    let eventHead = document.getElementById('event-head');
    let dataEntry = document.getElementById('data-entry');  
    let searchData = document.getElementById('search-data');
    let eventTable = document.getElementById('event-table');
      
    tabEvent.style.display = 'block';
    deleteEvent.style.display = 'none';
    addEvent.style.display = 'none';
    eventHead.style.display = 'none';
    dataEntry.style.display = 'none';
    searchData.style.display = 'none';
    eventTable.style.display = 'none';

}

// ------------- 19 June End------------------

// -------------20 June Start ----------------

// Code to make Add button work in Event section.

// let addButton = document.getElementById('addFile');
// let remove = document.getElementsByClassName('close');
// let fileUpload = document.getElementsByClassName('extraFile');

// addButton.onclick = function() {
  
//     fileUpload.style.display = 'block';
//     remove.style.display = 'block';

// }

// remove.onclick = function() {
  
//     fileUpload.style.display = 'none';

// }

// ------------- 20 June End----------------

// ------------- 21 June Start--------------

let tableRow = document.getElementsByClassName('table-row');
let deleteTable = document.getElementById('deleteTable');

deleteTable.onclick = function() {

    for (var i = tableRow.length - 1; i >= 0; i--) {
        
        tableRow[i].remove();
    }

}

function deleteRow(tableRow) {
    
    let row = tableRow.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    row.parentNode.removeChild(row);

}

// let copyIcon = document.getElementsByClassName('copy');

// ------------- 21 June End---------------

// ------------- 24 June Start---------------

let closeIcon = document.getElementsByClassName('close');
let extraFileTwo = document.getElementById('extraFile-2');
let extraFileThree = document.getElementById('extraFile-3');
let extraFileFour = document.getElementById('extraFile-4');
let extraFileFive = document.getElementById('extraFile-5');
let addedFiles = document.getElementsByClassName('addedFiles');
let addButton = document.getElementById('addFile');
let remove = document.getElementsByClassName('close');


let i = 0;

addButton.onclick = function() {

    if(i < addedFiles.length && i < remove.length){

        addedFiles[i].style.display = 'block';
        remove[i].style.display = 'block';

        i++;
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