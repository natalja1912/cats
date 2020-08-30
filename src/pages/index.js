import './index.css';
import { cards } from '../utils/constants.js';
import Card from '../components/Card.js';

//функция для отрисовки карточек
function renderCards(cards, containerSelector) {
    cards.forEach((item) => {
        const cardList = document.querySelector(containerSelector);
        const card = new Card(item, '.card__template');
        const cardElement = card.generateCard();
        cardList.append(cardElement);
    })
}

//отрисовка карточек на странице
renderCards(cards, '.cards');


