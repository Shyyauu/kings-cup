import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake, faCannabis, faDiamond, faHeart, faFaceGrinTongueWink } from '@fortawesome/free-solid-svg-icons'


export default function TypeAndSuit(props) {
  const { cardType, cardSuit } = props
  return (
    <>
    <div style=
      {
        {
          fontSize: cardType == 'Joker' ? '30px' : '',
          color: cardSuit == 'hearts' || cardSuit == 'diamonds' ? 'red' : 'black'
        }
        
      }
    >
      <div>
        {
            cardType == 'Joker' ? '' : cardType
        }
      </div>
      <div>
        {

            cardType == 'Joker' ? <FontAwesomeIcon icon={faFaceGrinTongueWink} /> :
            cardSuit == '' ? '' :
            cardSuit == 'clubs' ? <FontAwesomeIcon icon={faSnowflake}/> : 
            cardSuit == 'diamonds' ? <FontAwesomeIcon icon={faDiamond}/> : 
            cardSuit == 'hearts' ? <FontAwesomeIcon icon={faHeart}/> : 
            <FontAwesomeIcon icon={faCannabis}/>  
        }
        </div>
    </div>
    </>
  )
}