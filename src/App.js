import { useEffect, useState } from 'react'
import './App.css';
import SingleCard from './components/SingleCard';




const cardImages =[
  {"src":"/img/helmet-1.png",matched:false},
  {"src":"/img/potion-1.png",matched:false},
  {"src":"/img/ring-1.png",matched:false},
  {"src":"/img/scroll-1.png",matched:false},
  {"src":"/img/shield-1.png",matched:false},
  {"src":"/img/sword-1.png",matched:false}]



function App() 
{
  const [cards,setCards] =  useState([])
  const [turns,setTurns] = useState(0)
  const [choiceOne,setChoiceOne] =  useState(null)
  const [choiceTwo,setChoicetwo] =  useState(null)
  const [disabled,setDisabled] =  useState(null)



  //shuffle cards
  const shuffleCard = () =>
  {
    const shuffledCards = [...cardImages, ...cardImages] //...cardImages is used to spread the objects in the array ,v r using using twice bcz v need 1 copies of each
      .sort(() =>Math.random()- 0.5)
      .map((card)=>({...card,id:Math.random()}))


    setChoiceOne(null)
    setChoicetwo(null)
    setCards(shuffledCards)
    setTurns(0)

  } 


  //handle choice

  const handleChoice = (card) =>
  {
    choiceOne?setChoicetwo(card):setChoiceOne(card)
  }
  

  //compare 2 seleted cards
useEffect(()=> 
{   
  if(choiceOne && choiceTwo)
  {
   setDisabled(true)
   if(choiceOne.src === choiceTwo.src)
   {
    setCards(prevCards =>
      {
        return prevCards.map(card =>
          {
            if(card.src===choiceOne.src)
            {
              return {...card,matched:true}
            }
            else{
              return card
            }
          })
      })
    resetTurn()
   }
   else
   {
    setTimeout(() => resetTurn(),500)
   }
  }
},[choiceOne,choiceTwo])


console.log(cards)
  const resetTurn = () =>
  {
    setChoiceOne(null)
    setChoicetwo(null)
    setTurns(prevTurns => prevTurns+1)
    setDisabled(false)
  }

  useEffect(() =>
  {
    shuffleCard()
  },[])
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
        handleChoice={handleChoice}
        flipped={card === choiceOne || card === choiceTwo ||card.matched}
        disabled={disabled}/>
      ))  }

      <div className='turns'>
        Turns: {turns}
      </div>

     </div>

    </div>
  );
}

export default App;
