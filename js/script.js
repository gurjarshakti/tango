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

// function addEvent(evt, eventId) {

//     let tabEvent = document.getElementById('add-events');
//     let deleteEvent = document.getElementById('delete-events');
//     let addEvent = document.getElementById('add-events-button');
//     let eventHead = document.getElementById('event-head');
//     let dataEntry = document.getElementById('data-entry');  
//     let searchData = document.getElementById('search-data');
//     let eventTable = document.getElementById('event-table');
      
//     tabEvent.style.display = 'block';
//     deleteEvent.style.display = 'none';
//     addEvent.style.display = 'none';
//     eventHead.style.display = 'none';
//     dataEntry.style.display = 'none';
//     searchData.style.display = 'none';
//     eventTable.style.display = 'none';

// }

// ------------- 19 June End------------------

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