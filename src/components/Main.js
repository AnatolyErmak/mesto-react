import React from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from './Api';
import Card from './Card';


export default function Main(props) {

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

     <section className="elements">

     </section>
    
{/*       <PopupWithForm name = "popup_avatar" handler = {props.onEditAvatar} title = "Обновить аватар"
      children = {
        <>
        <input className="popup__field" id="avatar-url-input" name="avatar" type="url" placeholder="Введите url" required></input>
        <span className="popup__span-error" id="avatar-url-input-error"></span>
        </>
      } isOpen={props.onEditAvatar}
      /> */}

{/*      <section className="popup">
       <input className="popup__content popup__content-profile" noValidate id="profile-form"></input>
         <button className="popup__close-btn" type="button"></button>
         <h3 className="popup__title">Редактировать профиль</h3>
         <input className="popup__field popup__field_name" type="text" id="profile__input_name" placeholder="Имя" value="Жак-Ив Кусто"required minLength="2" maxLength="40" name = "name"
         ></input>
         <span className="popup__span-error" id="profile__input_name-error" ></span>

         <input className="popup__field popup__field_about" type="text" name = "job" placeholder="О себе"
          value="Исследователь океана" required minLength="2" maxLength="200" id="profile__input_about"></input>
         <span className="popup__span-error" id="profile__input_about-error" ></span>
         <button className="popup__button popup__button_form" type="submit">
           Сохранить
         </button>
         </section>   */}        
     
     
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
     
{/*      <section className = "popup popup_delete">
       <form className = "popup__delete-content">
         <h3 className = "popup__title popup__title_delete">Вы уверены?</h3>
         <button className="popup__close-btn" type="button"></button>
         <button className="popup__button popup__button_delete" type="submit" aria-label="Да">Да</button>
     </form>
     </section> */}
     
   </main>
    )
}