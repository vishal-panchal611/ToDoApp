const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === '')
    {
        alert("You must write something");
        // it will show alert when nothing is typed but add button is clicked
    }
    else
    {
        let li = document.createElement("li");
        // the above line will create a element with tag name li and stores that in variable li
        li.innerHTML = inputBox.value;
        //li will value get from the input field 
        listContainer.appendChild(li);
        //this will display under li container
        
        let span = document.createElement("span");
        //span to add a cross icon
        span.innerHTML="\u00d7";
        //this code adds a cross icon next to the text added
        li.appendChild(span);
        //to display the cross
        
    }

    inputBox.value = "";
    //this is added so that once the text is written in input field and add is clicked it should be ereased from the input box
    saveData();
}

//this will check where we have clicked, deoending on that it will 
// toggle between checked and unchecked options
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === 'LI')
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") 
    {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//function to save the text even after refresh of browser
function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
    //this will store all the contennts of web browser with the name of data 
}

//function to display the saved data when the broswer is opened
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();