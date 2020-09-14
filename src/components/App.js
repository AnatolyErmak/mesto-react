import React from 'react';
import Header from './header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm'

function App() {
  // переменные состояния
  const [isProfileOpen, setIsProfileOpen] = React.useState(false)
  const [isAvatarOpen, setIsAvatarOpen] = React.useState(false); // попап аватара
  const [isAddCardOpen, setIsAddCardOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({        // попап картинки
    isOpen: true,
    link: '',
    name: ''
  });

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
  function handleCardClick (props) {
    setSelectedCard({
      isOpen: false,
      link: props.link,
      name: props.name
    });
  }
  
    return ( 
    <div className="page">
      <Header/>
      <Main
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick} 
      onAddPlace={handleAddPlaceClick}
      profileIsOpenen={isProfileOpen}
      avatarIsOpen={isAvatarOpen} 
      addCardIsOpen={isAddCardOpen}
      card={selectedCard}
      onCardClick={handleCardClick} />
      <PopupWithForm isOpen = {isAvatarOpen}/>
      <Footer/>
    </div>          
  );

}

export default App;
