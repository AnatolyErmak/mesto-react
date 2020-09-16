import React from 'react';
import App from './App'

// компонент карточки 

function Card(props) {
    function handleClick() {
        <element onClick={_=> props.onClick(props.card)} />
    }
    // отрисовка 
    return (
    <div className="element" onClick = {card}>
      <button className="element__trash" type="button"></button>
      <img src="#" alt="название" class="element__image" />
      <div className="element__description">
    <h3 className="element__title">{}</h3>
        <div>
        <button button className="element__action" type="button"></button>
        <p className = "element__like-counter">0</p>
        </div>
    </div>
  </div>
    )
}

