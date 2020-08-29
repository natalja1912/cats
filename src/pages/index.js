import './index.css';
import { cardBags, watches, mobile, toys, cloth, fashion, furniture } from '../utils/constants.js';
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

//отрисовка карточек с сумками на странице
renderCards(cardBags, '.cards');

//отрисовка карточек с часами на странице
renderCards(watches, '.watches__cards');

//массив со всеми товарами
const allCards = [watches, mobile, toys, cloth, fashion, furniture];

const navList = document.querySelectorAll('.watches__nav-item');

//отрисовка карточек по ховеру на нужную категорию товаров
navList.forEach((item) => {
    item.addEventListener('mouseover', () => {
        document.querySelector('.watches__nav-item-watches').classList.remove('watches__nav-item_type_active');
        item.classList.add('watches__nav-item_type_active');
        const name = item.textContent;
        allCards.forEach((list) => {
            const type = list[0].type;
            if (type === name) {
                document.querySelector('.watches__cards').innerHTML = '';
                renderCards(list, '.watches__cards');
            }
        })
    })
    item.addEventListener('mouseout', () => {
        item.classList.remove('watches__nav-item_type_active');
    })
})
