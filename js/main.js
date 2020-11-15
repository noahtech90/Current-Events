let articleCollection = document.getElementsByClassName("content")

function moveHidden(id) {
    for (i = 0; i < articleCollection.length; i++) {
        articleCollection[i].className += ' hidden';
    }

   let activateElement = document.getElementsByClassName(id);
   activateElement.className  = activateElement.className.replace("hidden", "")

}