import { useState } from 'react'
import Card from './Card'
import KingsCard from './KingsCard'


function CardDeck() {

  const [isKing, setIsKing] = useState([])

  return (
    <>
        <div className="container">
            <div className="card-deck">
               <Card checkIsKing={setIsKing}/>
               <KingsCard isKing={isKing}/>
            </div>
        </div>    
    </>
  )
}

export default CardDeck