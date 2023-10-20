const cards = document.querySelectorAll('.card');
let flippedCards = [];
let matchedCards = [];

cards.forEach(card => {
    card.addEventListener('click', () => flipCard(card));
});

function flipCard(card) {
    if (flippedCards.length < 2 && !flippedCards.includes(card) && !matchedCards.includes(card)) {
        card.classList.add('flipped');
        flippedCards.push(card);
        if (flippedCards.length === 2) {
            setTimeout(checkForMatch, 1000);
        }
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;
    if (card1.textContent === card2.textContent) {
        matchedCards.push(card1, card2);
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        flippedCards = [];

        // Check if the game is won
        if (matchedCards.length === cards.length) {
            alert("Congratulations! You've won the game.");
        }
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        flippedCards = [];
    }
}