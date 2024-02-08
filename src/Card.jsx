import { useState } from 'react'
import CardType from './CardType'
import CardSuit from './CardSuit'

import './Card.css'

export default function Card() {

  const [type, setType] = useState('')
  const [suit, setSuit] = useState('')

  const cards = {
    type: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', "Joker"],
    suit: ['clubs', 'diamonds', 'hearts', 'spades'],
  }

    function randomCard() {
        setType(cards.type[Math.floor(Math.random() * (cards.type.length))])
        setSuit(cards.suit[Math.floor(Math.random() * (cards.suit.length))])
      }

  return (
    <>
        <div className="container">
            <div className="card-deck">
                <div className="card" onClick={() => randomCard()}>
                    <div className="left-top-card">
                        <CardType 
                            cardSuit={suit} 
                            cardType={type} 
                        />
                        <CardSuit 
                            cardSuit={suit} 
                            cardType={type} 
                        />
                    </div>

                    <div className="right-bottom-card">
                    <CardType 
                            cardSuit={suit} 
                            cardType={type} 
                        />
                        <CardSuit 
                            cardSuit={suit} 
                            cardType={type} 
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}