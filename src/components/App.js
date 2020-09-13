import React from 'react';
import Header from './header';
import Main from './Main';
import Footer from './Footer';

function App() {
  const [isProfileOpen, setIsProfileOpen] = React.useState(false)
  const [isAvatarOpen, setIsAvatarOpen] = React.useState(false);
  const [isAddCardOpen, setIsAddCardOpen] = React.useState(false);
  
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
  
    return ( 
    <div className="page">
      <Header/>
      <Main
      onEditAvatar={handleEditAvatarClick}
      avatarIsOpen={isAvatarOpen}  />
      <Footer/>
    </div>          
  );

}

export default App;
