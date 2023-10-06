document.getElementById("searchInput").addEventListener("keyup", function () {
    searchCards();
});

function searchCards() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var cardContainer = document.getElementById("cardContainer");
    var cards = cardContainer.getElementsByClassName("card");

    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var cardTitle = card.querySelector(".card-title").innerText.toLowerCase();
        var cardText = card.querySelector(".card-text").innerText.toLowerCase();

        if (cardTitle.includes(searchInput) || cardText.includes(searchInput)) {
            card.style.display = "block"; // Show matching cards
        } else {
            card.style.display = "none"; // Hide non-matching cards
        }
    }
}