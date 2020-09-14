import React from 'react';
import App from './App'


export default function PopupWithForm (props) {
    return (
    <section className="popup popup__avatar">
{console.log(props)}
    <form className="popup__content popup__avatar-content" id="avatar-form" novalidate onСlick = {props.avatarIsOpen} >
        <button className="popup__close-btn" type="button"></button>
        <h3 className="popup__title ">Обновить аватар</h3>
        <input className="popup__field" id="avatar-url-input" name="avatar" type="url" placeholder="Введите url" required></input>
        <span className="popup__span-error" id="avatar-url-input-error"></span>
        <button className="popup__button popup__button_form" type="submit" aria-label="Сохранить">Сохранить</button>
    </form>
</section>
    ) 
}