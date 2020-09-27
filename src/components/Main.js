import React from 'react';
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../usercontext/CurrentUserContext';


export default function Main(props) {
const {
  cards,
  onCardLike,
  onCardDelete
} = props

const currentUser = React.useContext(CurrentUserContext);


    return (
<main className="main">
     
     <section className="profile">
       <img src={userAvatar} alt="Avatar" className="profile__avatar" />
       <div className="profile__img-hover" onClick ={props.onEditAvatar}></div>
       <div className="profile__info">
      <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-btn" type="button" onClick = {props.onEditProfile}></button>
    <p className="profile__about">{userDescription}</p>
       </div>
       <button className="profile__add-btn" type="button" onClick = {props.onAddPlace}></button>
     </section>

     <section className="elements">
       {cards.map((card) => (
         <Card
         key={card._id}
         card={card}
         onCardClick={props.onCardClick}
         onCardLike={onCardLike}
         onCardDelete={onCardDelete}/>
       ))}
      </section>        
   </main>
    )
}