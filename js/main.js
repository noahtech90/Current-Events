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
    title = document.getElementById('title');
    description = document.getElementById('descript');
    link = document.getElementById('link');
    category = document.getElementById('category');
    
}