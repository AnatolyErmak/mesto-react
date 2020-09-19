import React from 'react';
import api from '../utils/api';
import Card from './Card';


export default function Main(props) {
// переменные состояния
const [userName, setUserName] = React.useState() // Имя пользователя
const [userDescription , setUserDescription] = React.useState() // описание пользователя
const [userAvatar, setUserAvatar] = React.useState() // Аватар
const [cards, setCards] = React.useState([]); // Массив карточек

React.useEffect(() => {
  api.getUserInfo()
    .then((data)=> {
      setUserName(data.name)
      setUserDescription(data.about)
      setUserAvatar(data.avatar)
    })
    .catch((err) => {
      console.log(`Произошла ошибка: ${err}`);
    });
}, [])

React.useEffect(() => {
  api.getInitialCards()
    .then((data) => {
      setCards(data)
    })
    .catch((err) => {
      console.log(`Произошла ошибка: ${err}`);
  });
}, [])

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
         onCardClick={props.onCardClick}/>
       ))}
      </section>        
   </main>
    )
}