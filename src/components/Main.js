import React, { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import Card from './Card';


export default function Main(props) {
// переменные состояния
const [userName, setUserName] = React.useState() // Имя пользователя
const [userDescription , setUserDescription] = React.useState() // описание пользователя
const [userAvatar, setUserAvatar] = React.useState() // Аватар
const [cards, setCards] = React.useState([]); // Массив карточек

useEffect(() => {
  api.getInitialCards().then(cards => {
    setCards(cards)
  }, [])
})

    return (
<main className="main">
     
     <section className="profile">
       <img src="./images/ava.png" alt="Avatar" className="profile__avatar" />
       <div className="profile__img-hover" onClick ={props.onEditAvatar}></div>
       <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button className="profile__edit-btn" type="button" onClick = {props.onEditProfile}></button>
          <p className="profile__about">Исследователь океана</p>
       </div>
       <button className="profile__add-btn" type="button" onClick = {props.onAddPlace}></button>
     </section>

     <section className="elements"></section>    

     <section className="popup popup_card">
       <form className="popup__content" id="card-form" noValidate>
         <button
           className="popup__close-btn"
           id="cardPopupCloseBtn"
           type="button"
         ></button>
         <h3 className="popup__title">Новое место</h3>
         <input className="popup__field popup__field_name" id="cardName" type="text" name = "name"
           placeholder="Название" value="" required minLength="1" maxLength="30"></input>
         <span className="popup__span-error" id="cardName-error"></span>
         <input className="popup__field popup__field_about" id="cardUrl" type="url"
           name="link" placeholder="Ссылка на картинку" value="" required></input>
         <span className="popup__span-error" id="cardUrl-error"></span>
         <button className="popup__button popup__button_form" type="submit" id="cardSaveBtn">
           Создать
         </button>
       </form>
     </section>
     
   </main>
    )
}