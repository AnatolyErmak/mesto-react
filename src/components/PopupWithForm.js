import React from 'react';
import App from './App'
/* 

export default function PopupWithForm (props) {
    return (
    <section className={props.isOpen ? `popup ${props.name} popup_opened` : `popup ${props.name}`}>
{console.log(props)}
    <form className="popup__content " id="profile-form" noValidate >
        <button className="popup__close-btn" type="button" onClick = {props.onClose}></button>
        <h3 className="popup__title">{props.title}</h3>
        {props.children}
        <button className="popup__button popup__button_form" type="submit" aria-label="Сохранить">Сохранить</button>
    </form>
</section>
    ) 
} */


/* <input className="popup__field" id="avatar-url-input" name="avatar" type="url" placeholder="Введите url" required></input>
    <span className="popup__span-error" id="avatar-url-input-error"></span> */



function PopupWithForm({
    name, isOpen, title,handler, onClose, children
}) {
    return (
    <div className={isOpen ? `popup ${name} popup_opened` : `popup ${name}`}>
        <form className="popup__content " id="profile-form" noValidate >
            <button className="popup__close-btn" type="button" onClick = {onClose}></button>
            <h3 className="popup__title">{title}</h3>
            {children}
            <button className="popup__button popup__button_form" type="submit" aria-label="Сохранить"
            onClick={handler}>Сохранить</button>
            </form>
    </div>
    );
}
    
export default PopupWithForm;