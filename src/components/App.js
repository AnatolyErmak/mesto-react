import React from 'react';
import Header from './header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm'
import Card from './Card'

function App() {
  // переменные состояния
  const [isProfileOpen, setIsProfileOpen] = React.useState(false)
  const [isAvatarOpen, setIsAvatarOpen] = React.useState(false); // попап аватара
  const [isAddCardOpen, setIsAddCardOpen] = React.useState(false);
  const [deleteIsOpen, setdeleteIsOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({        // попап картинки
    link: '',
    name: ''
  });
  // функция закрытия попапов
  function closeAllPopups() {
    setIsProfileOpen(false);
    setIsAddCardOpen(false);
    setIsAvatarOpen(false);
  }
  // хэндлер удаления 
  function handleDeleteClick() {
    setdeleteIsOpen(true)
  }
  // Хэндлеры для открытия попапов
  function handleEditProfileClick() {
    setIsProfileOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddCardOpen(true);
  }
  function handleEditAvatarClick() {
    setIsAvatarOpen(true);
  }
  function handleCardClick (card) {
    setSelectedCard(card);
  }
  
    return ( 
    <div className="page">
      <Header/>
      <Main
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick} 
      onAddPlace={handleAddPlaceClick}
      onDelete = {handleDeleteClick}
      profileIsOpenen={isProfileOpen}
      avatarIsOpen={isAvatarOpen} 
      addCardIsOpen={isAddCardOpen}
      deleteIsOpen = {deleteIsOpen}
      card={selectedCard}
      onCardClick={handleCardClick} 
      onClose = {closeAllPopups}
      />
      <Footer/>
      <PopupWithForm name = "popup_avatar" isOpen = {isAvatarOpen} title = "Обновить аватар"
      children = {
        <>
        <input className="popup__field" id="avatar-url-input" name="avatar" type="url" placeholder="Введите url" required></input>
        <span className="popup__span-error" id="avatar-url-input-error"></span>
        </>
      } onClose = {closeAllPopups}
      />
      <PopupWithForm name = "popup_profile" isOpen = {isProfileOpen} title = "Редактировать профиль"
      children = {
        <>
        <input className="popup__field popup__field_name" type="text" id="profile__input_name"
         placeholder="Имя" value="Жак-Ив Кусто"required minLength="2" maxLength="40" name = "name"></input>
        <span className="popup__span-error" id="profile__input_name-error"></span>
        <input className="popup__field popup__field_about" type="text" name = "job" placeholder="О себе"
        value="Исследователь океана" required minLength="2" maxLength="200" id="profile__input_about"></input>
        <span className="popup__span-error" id="profile__input_about-error" ></span>
        </>
      } onClose = {closeAllPopups}
      />
      <PopupWithForm name = "popup_card" isOpen = {isAddCardOpen} title = "Новое место"
      children = {
        <>
        <input className="popup__field popup__field_name" id="cardName" type="text" name = "name"
           placeholder="Название" value="" required minLength="1" maxLength="30"></input>
         <span className="popup__span-error" id="cardName-error"></span>
         <input className="popup__field popup__field_about" id="cardUrl" type="url"
           name="link" placeholder="Ссылка на картинку" value="" required></input>
         <span className="popup__span-error" id="cardUrl-error"></span>
        </>
      } onClose = {closeAllPopups}
      />
      <PopupWithForm name = "popup_delete" isOpen = {deleteIsOpen} title = "Вы уверены?"
      children = {
        <>
        <button className="popup__button popup__button_delete" type="submit" aria-label="Да">Да</button>
        </>
      } onClose = {closeAllPopups}
      />
      <Card card = {handleCardClick}/>
      
      
    </div>          
  );

}

export default App;
