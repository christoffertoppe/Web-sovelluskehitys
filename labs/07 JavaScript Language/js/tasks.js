// tasks.js
// This script manages a to-do list.

// Need a global variable:
var tasks = []; 

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    var output = document.getElementById('output');
    
    // For the output:
    if(tasks.length<1) {
        var message = '';
    }
    if (task.value) {
    
        // Add the item to the array:
        tasks.push(task.value);
        
        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;
        
    } // End of task.value IF.

    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
} // End of init() function.
window.onload = init;


function removeDuplicates() {
    console.log("beggining:" + tasks);
    var uniqueArray = [];
    var div = document.getElementById("output");
    var ol = div.getElementsByTagName("ol");
   // var liArray = ol.item(0).getElementsByTagName("li");
    for(var value of tasks) {
        if(uniqueArray.indexOf(value) === -1) {
            uniqueArray.push(value);
        }
    }
    var h2 = document.getElementsByTagName("h2");
    tasks = uniqueArray;
    console.log("end " + tasks);
    let message = '<h2>To-Do</h2><ol>';
    for (var i= 0; i < tasks.length; i++) {
        message += "<li>" + tasks[i] + "</li>";
    }
    message += '</ol>';

    output.innerHTML = message;
    /*
   ol.innerHTML =tasks;
   div.innerHTML = h2.value + ol.value;
   console.log(ol);
*/

    /*
    for (var i = 0; i < liArray.length; i++) {
        for (var j = i + 1; j < liArray.length; j++) {
            console.log("yeah");
            if (liArray[i].innerText === liArray[j].innerText) {
                liArray[j].outerHTML = "";
            }
        }
    }
    for (var i = 0; i < liArray.length; i++) {                  
        for (var j = i + 1; j < liArray.length; j++) {          
            console.log("yeah");                                
            if (liArray[i].innerText === liArray[j].innerText) {
                liArray[j].outerHTML = "";                      
            }                                                   
        }                                                       
    }
    */
    //tasks = liArray;
    return false;
}






