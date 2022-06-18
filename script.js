const card = document.querySelectorAll('.memory-card');
const button = document.querySelector('.btn');
let lockBoard = false;
let hasFlipCard = false;
let firstCard,
    secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this == firstCard) return
    this.classList.toggle('flip');
    if (!hasFlipCard) {
        //первый клик
        hasFlipCard = true;
        firstCard = this;
        return;
    }
    //второй клик
    hasFlipCard = false;
    secondCard = this;
    checkForMatch();

}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disabledCard() : unflipCard();


}
function unflipCard() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
    }, 1000);
}

function disabledCard() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function shuffle() {
    card.forEach(card => {
        let random = Math.floor(Math.random() * 12);
        console.log(random);
        card.style.order = random;
    });
}
shuffle();

card.forEach(card => {
    card.addEventListener('click', flipCard)
});