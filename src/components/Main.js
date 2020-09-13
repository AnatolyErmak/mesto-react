import React from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './PopupWithImage';
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
         <button className="profile__edit-btn" type="button"></button>
         <p className="profile__about">Исследователь океана</p>
       </div>
      
       <button className="profile__add-btn" type="button"></button>
     </section>

     <section className="elements"></section>
    
     <section className="popup">
       <input className="popup__content popup__content-profile" novalidate id="profile-form"></input>
         <button className="popup__close-btn" type="button"></button>
         <h3 className="popup__title">Редактировать профиль</h3>
         <input
           className="popup__field popup__field_name"
           type="text"
           id="profile__input_name"
           placeholder="Имя"
           value="Жак-Ив Кусто"
           required
           minlength="2"
           maxlength="40"
           name = "name"
         ></input>
         <span
           className="popup__span-error"
           id="profile__input_name-error"
         ></span>

         <input
           className="popup__field popup__field_about"
           type="text"
           name = "job"
           placeholder="О себе"
           value="Исследователь океана"
           required
           minlength="2"
           maxlength="200"
           id="profile__input_about"
         ></input>
         <span
           className="popup__span-error"
           id="profile__input_about-error"
         ></span>
         <button className="popup__button popup__button_form" type="submit">
           Сохранить
         </button>
         </section>          
     
     
     <section className="popup popup_card">
       <form className="popup__content" id="card-form" novalidate>
         <button
           className="popup__close-btn"
           id="cardPopupCloseBtn"
           type="button"
         ></button>
         <h3 className="popup__title">Новое место</h3>
         <input
           className="popup__field popup__field_name"
           id="cardName"
           type="text"
           name = "name"
           placeholder="Название"
           value=""
           required
           minlength="1"
           maxlength="30"
         ></input>
         <span className="popup__span-error" id="cardName-error"></span>
         <input
           className="popup__field popup__field_about"
           id="cardUrl"
           type="url"
           name="link"
           placeholder="Ссылка на картинку"
           value=""
           required
         ></input>
         <span className="popup__span-error" id="cardUrl-error"></span>
         <button className="popup__button popup__button_form" type="submit" id="cardSaveBtn">
           Создать
         </button>
       </form>
     </section>
     
     <section className="popup popup_image">
       <div className="popup__image-content">
         <button
           className="popup__close-btn"
           type="button"
           id="popupImageCloseBtn"
         ></button>
         <img
           className="popup__image-link"
           src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
           alt="изображение"
         />
         <p className="popup__text">Холмогорский район</p>
       </div>
     </section>
     
     <section className = "popup popup_delete">
       <form className = "popup__delete-content">
         <h3 className = "popup__title popup__title_delete">Вы уверены?</h3>
         <button className="popup__close-btn" type="button"></button>
         <button className="popup__button popup__button_delete" type="submit" aria-label="Да">Да</button>
     </form>
     </section>
     
    <section className="popup popup__avatar">
     <form className="popup__content popup__avatar-content" id="avatar-form" novalidate>
         <button className="popup__close-btn" type="button"></button>
         <h3 className="popup__title ">Обновить аватар</h3>
         <input className="popup__field" id="avatar-url-input" name="avatar" type="url" placeholder="Введите url" required></input>
         <span className="popup__span-error" id="avatar-url-input-error"></span>
         <button className="popup__button popup__button_form" type="submit" aria-label="Сохранить">Сохранить</button>
     </form>
 </section> 
   </main>
    )
}