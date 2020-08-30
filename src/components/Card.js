export default class Card {
  constructor(item, cardSelector) {
    this._subheading = item.subheading;
    this._text = item.text;
    this._size = item.size;
    this._descriptionText = item.description;
    this._disabled = item.disabled;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._cardSelector).content;
    const newTemplate = cardTemplate.cloneNode(true);
    return newTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._description = this._element.querySelector('.card__description');
    this._heading = this._element.querySelector('.card__heading');
    this._action = this._element.querySelector('.card__action');
    this._html = this._action.innerHTML;
    this._span = this._element.querySelector('.card__span');
    this._element.querySelector('.card__subheading').textContent = this._subheading;
    this._element.querySelector('.card__text').textContent = this._text;
    this._element.querySelector('.card__size-digits').textContent = this._size;
    this._card = this._element.querySelector('.card');

    if (this._disabled){
      this._action.classList.add('card__action_type_disabled');
      this._card.classList.add('card_disabled');
      this._element.querySelector('.card__size').classList.add('card__size_type_disabled');
      this._action.textContent = `Печалька, ${this._subheading} закончился`;
    }
    
    if (!this._disabled){
      this._setEventListeners();
    }

    return this._element;
  }

  _setEventListeners() {
    this._card.addEventListener('click', this._toggleCard);
  }

  _toggleCard = (evt) => {
    this._card.classList.toggle('card_active');
    this._card.querySelector('.card__size').classList.toggle('card__size_type_active');

    if (this._card.classList.contains('card_active')) {
      this._action.textContent = this._descriptionText;
      if (!this._action.contains(evt.target)) {
        this._description.textContent = "Котэ не одобряет?";
        this._description.classList.add('card__description_type_hover');
      }
      this._card.addEventListener('mouseover', this._changeHeading);
      this._card.addEventListener('mouseout', this._changeHeading);
    }
    else {
      this._description.classList.remove('card__description_type_hover');
      this._description.textContent = "Сказочное заморское яство";
      this._action.innerHTML = this._html;
      this._card.removeEventListener('mouseover', this._changeHeading);
      this._card.removeEventListener('mouseout', this._changeHeading);
    }
  }

  _changeHeading = (evt) => {
    let text = this._description.textContent;
    if (text === "Котэ не одобряет?"){
      this._description.textContent = "Сказочное заморское яство";
      this._description.classList.remove('card__description_type_hover');
    }
    else if (!this._action.contains(evt.target)) {
      this._description.textContent = "Котэ не одобряет?";
      this._description.classList.add('card__description_type_hover');
    }

  }

}

