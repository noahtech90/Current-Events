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
}

function appendPage() {
    var main = window.open('index.html')
}