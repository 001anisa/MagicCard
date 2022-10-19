import { useState } from 'react'
import './App.css';
import SingleCard from './components/SingleCard';




const cardImages =[
  {"src":"/img/helmet-1.png"},
  {"src":"/img/potion-1.png"},
  {"src":"/img/ring-1.png"},
  {"src":"/img/scroll-1.png"},
  {"src":"/img/shield-1.png"},
  {"src":"/img/sword-1.png"}]



function App() 
{
  const [cards,setCards] =  useState([])
  const [turns,setTurns] = useState(0)
  const [choiceOne,setChoiceOne] =  useState(null)
  const [choiceTwo,setChoicetwo] =  useState(null)



  //shuffle cards
  const shuffleCard = () =>
  {
    const shuffledCards = [...cardImages, ...cardImages] //...cardImages is used to spread the objects in the array ,v r using using twice bcz v need 1 copies of each
      .sort(() =>Math.random()- 0.5)
      .map((card)=>({...card,id:Math.random()}))

    setCards(shuffledCards)
    setTurns(0)

  } 


  //handle choice

  const handleChoice = (card) =>
  {
    choiceOne?setChoicetwo(card):setChoiceOne(card)
  }

  return (
    <div className="App">
      <h1>Magic Memory</h1>
      <button onClick={shuffleCard}>New Game</button>
      <div className='card-grid'>
      {cards.map(card=>
      (
       <SingleCard
        key={card.id} 
        card={card}
        handleChoice={handleChoice}/>
      ))  }

     </div>

    </div>
  );
}

export default App;
