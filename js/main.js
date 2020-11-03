const articleCollection = document.getElementsByClassName("article")

function moveHidden() {
    for (i = 0; i < articleCollection.length; i++) {
        articleCollection[i].classList.add("hidden")
    }
}