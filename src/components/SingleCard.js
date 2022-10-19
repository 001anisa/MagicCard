import React from 'react'
import './SingleCard.css'


const SingleCard = ({card,handleChoice}) => {

    const handleCLick =() =>
    {
        handleChoice(card)
    }
  return (
    

    <div className='card' >
          <div>
            <img className='front' src ={card.src}  alt="card-front"/>
            <img className='back' 
            src ="/img/cover.png" 
            onClick={handleCLick} 
            alt="card-back"/>
          </div>


        </div>
 
  )
}

export default SingleCard
