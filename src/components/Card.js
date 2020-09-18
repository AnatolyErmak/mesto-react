import React from 'react';
import App from './App'

// компонент карточки 

function Card (props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
    // отрисовка 
    console.log(props)
    return (
    <div className="element">
      <button className="element__trash" type="button"></button>
      <img src={props.card.link} alt={props.card.name} class="element__image" onclick = {handleClick}/>
      <div className="element__description">
    <h3 className="element__title">{props.card.name}</h3>
        <div>
        <button button className="element__action" type="button"></button>
    <p className = "element__like-counter">0</p>
        </div>
    </div>
  </div>
    )
}

export default Card