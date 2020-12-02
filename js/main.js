let articleCollection = document.getElementsByClassName("content")

function moveHidden(id) {
    for (i = 0; i < articleCollection.length; i++) {
        articleCollection[i].className += ' hidden';
    }

    var div = document.querySelector("." + id);
    console.log(div);
    div.classList.remove('hidden')
}

function addNew() {
    title = document.getElementById('title').value;
    description = document.getElementById('descript').value;
    link = document.getElementById('link').value;
    category = document.getElementById('category').value;

    return [title, description, link, category]
}

function appendPage(newPage) {
    // Collect variables from form
    newPage = addNew();


    var main = window.open('index.html');
    main.onload = function(){
        document.addEventListener("DOMContentLoaded", ready);
        alert("test")
        var newDiv = main.document.createElement("div");
        var newLink = main.document.createElement("a");
        newLink.innerHTML = "Test"

        var newTitle = main.document.createTextNode(newPage[0]);
        var newDescript = main.document.createTextNode(newPage[1]);
        var newLinkText = main.document.createTextNode(newPage[2]);
        
        main.document.body.appendChild(newDiv);
        newDiv.setAttribute("id", "newestDiv")
        newDiv.appendChild(newLink);
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newDescript);
    }
}