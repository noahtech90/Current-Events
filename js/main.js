let articleCollection = document.getElementsByClassName("content")

function moveHidden(id) {
    for (i = 0; i < articleCollection.length; i++) {
        articleCollection[i].className += ' hidden';
    }

    var div = document.querySelector("." + id);
    console.log(div);
    div.classList.remove('hidden')
    console.log(div.classList)
}

function addNew() {
    title = document.getElementById('title').value;
    description = document.getElementById('descript').value;
    link = document.getElementById('link').value;
    category = document.getElementById('category').value;

    return [title, description, link, category]
}

function appendPage(newPage) {
    var main = window.open('index.html')
    main.onload = function(){
        const newDiv = document.createElement("div");
        const newLink = document.createElement("a")

        const newTitle = document.createTextNode(newPage[0]);
        const newDescript = document.createTextNode(newPage[1]);
        const newLinkText = document.createTextNode(newPage[2]);
        main.body.appendChild(newDiv);
        newDiv.appendChild(newLink);
        newLink.appendChild(newTitle);
        


    }
}