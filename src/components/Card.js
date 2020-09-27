import React from 'react';
import { CurrentUserContext } from '../usercontext/CurrentUserContext';

// компонент карточки 

function Card (props) {
  
  const {card, 
        onCardClick,
        onCardLike,
        onCardDelete
  } = props

  const currentUser = React.useContext(CurrentUserContext);
  const isMyOwner = card._id === currentUser._id

  const cardDeleteButton = (`element__trash ${isMyOwner ? 'element__trash_active' : ''}`)

  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardLikeButton = (
    `element__action ${isLiked} ? 'element__action_active' : ''}`
  )

  function handleClick() {
    onCardClick(card)
  }

  function handleLikeClick() {
    onCardLike(card);
}

  function handleDeleteClick() {
    onCardDelete(card);
  }
    // отрисовка 
    return (
    <div className="element">
      <button className={`${cardDeleteButton}`} onClick={handleDeleteClick} type="button"></button>
      <img  className="element__image" alt = "изображение" onClick = {handleClick} src ={card.link}/>
      <div className="element__description">
    <h3 className="element__title">{card.name}</h3>
        <div>
        <button onClick={handleLikeClick} className={`${cardLikeButton}`} type="button"></button>
    <p className = "element__like-counter">{card.likes.length}</p>
        </div>
    </div>
  </div>
    )
}

export default Card