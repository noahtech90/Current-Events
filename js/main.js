let articleCollection = document.getElementsByClassName("content")

function moveHidden(id) {
    for (i = 0; i < articleCollection.length; i++) {
        articleCollection[i].className += ' hidden';
    }

   let activateElement = document.getElementsByClassName(id);
   for (i = 0; i < activateElement.length; i ++) {
    activateElement[i].className -= ' hidden';
   }

}