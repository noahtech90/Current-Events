let articleCollection = document.getElementsByClassName("content")

function moveHidden(id) {
    for (i = 0; i < articleCollection.length; i++) {
        articleCollection[i].className += ' hidden';
    }
    
    var international_div = document.querySelector("." + id);
    international_div.className -= ' hidden';

}