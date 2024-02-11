import { useState } from 'react'
import TypeAndSuit from './TypeAndSuit'
import Challenges from './Challenges'

import './Card.css'

export default function Card() {

  const [type, setType] = useState('')
  const [suit, setSuit] = useState('')
  const [isClicked, setIsClicked] = useState(false)

  const cards = {
    type: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', "Joker"],
    suit: ['clubs', 'diamonds', 'hearts', 'spades'],
  }

    function randomCard() {
        setType(cards.type[Math.floor(Math.random() * (cards.type.length))])
        setSuit(cards.suit[Math.floor(Math.random() * (cards.suit.length))])
        setIsClicked(prevState => !prevState)
      }
      console.log(isClicked)

  return (
    <>
        <div className="container">
            <div className="card-deck">
                <div className="card" onClick={() => randomCard()}>
                    <div className="left-top-card">
                        <TypeAndSuit 
                            cardSuit={suit} 
                            cardType={type} />
                    </div>

                    <div className="main-card-text">
                        <Challenges 
                            cardType={type} 
                            isClicked={isClicked}/>
                    </div>

                    <div className="right-bottom-card">
                        <TypeAndSuit 
                                cardSuit={suit} 
                                cardType={type} />
                    </div>

                </div>
                    <button onClick={() => randomCard()}>
                        {suit != '' && type != '' ? 'NEXT CARD' : 'START'}
                    </button>
            </div>
        </div>
    </>
  )
}