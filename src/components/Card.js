export default class Card {
  constructor(item, cardSelector) {
    this._link = item.link;
    this._text = item.text;
    this._price = item.price;
    this._likes = item.likes;
    this._messages = item.messages;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._cardSelector).content;
    const newTemplate = cardTemplate.cloneNode(true);
    return newTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._priceText = this._element.querySelector('.card__price');
    this._addButton = this._element.querySelector('.card__add-button');
    this._likesText = this._element.querySelector('.card__likes');
    this._messagesText = this._element.querySelector('.card__messages');
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__title').textContent = this._text;
    this._priceText.textContent = this._price;
    this._likesText.textContent = this._likes;
    this._messagesText.textContent = this._messages;
    this._addButton.classList.toggle('card__display-none');
    this._likesText.classList.toggle('card__display-none');
    this._messagesText.classList.toggle('card__display-none');
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._card = this._element.querySelector('.card');
    this._card.addEventListener('mouseover', this._toggleDisplay);
    this._card.addEventListener('mouseout', this._toggleDisplay);
  }

  _toggleDisplay = (evt) => {
      this._addButton.classList.toggle('card__display-none');
      this._likesText.classList.toggle('card__display-none');
      this._messagesText.classList.toggle('card__display-none');
      if (!this._addButton.classList.contains('card__display-none')){
        this._priceText.style.color = "#8c84f9";
      }
      else {
        this._priceText.style.color = "#333333";
      }
  }

}

