import React from 'react';
import Header from './header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../usercontext/CurrentUserContext';
import  api  from '../utils/api';
import AddPlacePopup from './AddPlacePopup'


function App() {
  // переменные состояния
  const [currentUser, setCurrenUser] = React.useState({});
  const [isProfileOpen, setIsProfileOpen] = React.useState(false)
  const [isAvatarOpen, setIsAvatarOpen] = React.useState(false); // попап аватара
  const [isAddCardOpen, setIsAddCardOpen] = React.useState(false);
  const [deleteIsOpen, setdeleteIsOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    isImageOpen: false,      // попап картинки
    link: '',
    name: ''
  });
  
  // функция закрытия попапов
  function closeAllPopups() {
    setIsProfileOpen(false);
    setIsAddCardOpen(false);
    setIsAvatarOpen(false);
    setSelectedCard({
      isImageOpen: false,
      link: '',
      name: ''
    }) 
      
    
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
  function handleCardClick (cardData) {
    const {link, name} = cardData
    setSelectedCard({isImageOpen: true, link : link, name: name});
  }
  // _______________________________________cards

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setCurrenUser(data);
      })
      .catch((err) => {
        console.log(`Произошла ошибка: ${err}`);
      });
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data)
      })
      .catch((err) => {
        console.log(`Произошла ошибка: ${err}`);
    });
  }, [])

  function handleAddPlaceSubmit(data) {
    
    api.postNewCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Произошла ошибка: ${err}`);
      })
  }



  function handleCardDelete (card) {
    api.deleteCard(card._id)
        .then(() => {
            const newCards = cards.filter(item => item._id !== card._id);
            setCards(newCards);
        })
        .catch(err => console.log(err))
}

// ___________________________________ лайки

function handleCardLike(card) {
  api.putLike(card._id)
    .then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    })
    .catch((err) => {
      console.log(`Произошла ошибка: ${err}`);
    });
}

function handleCardDislike(card) {
  api.deleteLike(card._id)
  .then((newCard) => {
    const newCards = cards.map((c) => c._id === card._id ? newCard : c);
    setCards(newCards);
  })
  .catch((err) => {
    console.log(`Произошла ошибка: ${err}`);
  });
}
    return ( 
      // создаем контекст
  <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header/>
      <Main

      onCardDelete = {handleCardDelete}

      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick} 
      onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick} 
      
      onDelete = {handleDeleteClick}
      profileIsOpenen={isProfileOpen}
      avatarIsOpen={isAvatarOpen} 
      addCardIsOpen={isAddCardOpen}
      deleteIsOpen = {deleteIsOpen}
      cards={cards}

      onCardLike = {handleCardLike}
      onCardDislike = {handleCardDislike}

      

      
      onClose = {closeAllPopups}
      />
      <Footer/>
      <PopupWithForm name = "popup_avatar" isOpen = {isAvatarOpen} title = "Обновить аватар" onClose = {closeAllPopups}>
        {/* children */}
        <input className="popup__field" id="avatar-url-input" name="avatar" type="url" placeholder="Введите url" required></input>
        <span className="popup__span-error" id="avatar-url-input-error"></span>

      </PopupWithForm>
   
      <PopupWithForm name = "popup_profile" isOpen = {isProfileOpen} title = "Редактировать профиль" onClose = {closeAllPopups}>
          {/* children */}
        <input className="popup__field popup__field_name" type="text" id="profile__input_name"
         placeholder="Имя" required minLength="2" maxLength="40" name = "name"></input>
        <span className="popup__span-error" id="profile__input_name-error"></span>
        <input className="popup__field popup__field_about" type="text" name = "job" placeholder="О себе"
         required minLength="2" maxLength="200" id="profile__input_about"></input>
        <span className="popup__span-error" id="profile__input_about-error" ></span>

      </PopupWithForm>

      <AddPlacePopup 
        isOpen = {isAddCardOpen}
        onClose = {closeAllPopups}
        onAddPlace = {handleAddPlaceSubmit}
        >

       </AddPlacePopup>

      <PopupWithForm name = "popup_delete" isOpen = {deleteIsOpen} title = "Вы уверены?" onClose = {closeAllPopups}>
            {/* children */}
          <button className="popup__button popup__button_delete" type="submit" aria-label="Да">Да</button>
      </PopupWithForm>

      <ImagePopup
      isOpen = {selectedCard.isImageOpen}
      onClose = {closeAllPopups}
      name = {selectedCard.name}
      link =  {selectedCard.link}
      />
    </div>
    </CurrentUserContext.Provider>        
  );

}

export default App;
