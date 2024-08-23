var searchForm = document.getElementById("search-form");
var searchInput = document.getElementById("search-input");
var cardContainer = document.getElementById("card-container");

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    for (let i = 0; i < cardContainer.children.length; i++) {
        var text = cardContainer.children[i].getElementsByTagName("div")[0].getElementsByTagName("div")[0].getElementsByTagName("p")[0];

        var textValue = text.textContent;

        if (textValue.toUpperCase().indexOf(searchInput.value.toUpperCase()) > -1) {
            cardContainer.children[i].getElementsByTagName("div")[0].style.display = "";
        }
        else {
            cardContainer.children[i].getElementsByTagName("div")[0].style.display = "none";
        }
    }
})