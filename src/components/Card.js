import React from 'react';

// компонент карточки 

function Card (props) {
  
  const {card, onCardClick} = props

  function handleClick() {
    onCardClick(card)
  }
    // отрисовка 
    console.log(card.likes.lenght)
    return (
    <div className="element">
      <button className="element__trash" type="button"></button>
      <img  className="element__image" alt = "изображение" onClick = {handleClick} src ={card.link}/>
      <div className="element__description">
    <h3 className="element__title">{card.name}</h3>
        <div>
        <button button className="element__action" type="button"></button>
    <p className = "element__like-counter">{card.likes.lenght}</p>
        </div>
    </div>
  </div>
    )
}

export default Card