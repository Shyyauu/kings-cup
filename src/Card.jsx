import { useState } from 'react'
import TypeAndSuit from './TypeAndSuit'
import Challenges from './Challenges'

import './Card.css'

export default function Card(props) {

  const [type, setType] = useState('')
  const [suit, setSuit] = useState('')
  const [kings, setKings] = useState([])
  const [isClicked, setIsClicked] = useState(false)
  const { checkIsKing } = props
 
  const cards = {
    type: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', "Joker"],
    suit: ['clubs', 'diamonds', 'hearts', 'spades'],
  }

  function randomCard() {
    if (kings.length === 4) {
        console.log('gameover')
        console.log(kings)
        return
    }

        let cardType = cards.type[Math.floor(Math.random() * (cards.type.length))]
        let cardSuit = cards.suit[Math.floor(Math.random() * (cards.suit.length))]

        checkIsKing(kings)
        if (cardType === 'K') {
            if (!kings.includes(cardSuit)) {
                setKings(current => [...current, cardSuit])
                setSuit(cardSuit)
                setType(cardType)
            } else {
                randomCard()
                return
            }
        } else {
            setType(cardType)
            setSuit(cardSuit)
        }

        setIsClicked(prevState => !prevState)
    }


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