import React from 'react';
import App from './App'

// компонент карточки 

function Card (props) {
  
    // отрисовка 
    console.log(props)
    return (
    <div className="element" onClick >
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

export default Card