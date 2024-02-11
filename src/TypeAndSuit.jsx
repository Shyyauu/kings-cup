import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake, faCannabis, faDiamond, faHeart, faFaceGrinTongueWink } from '@fortawesome/free-solid-svg-icons'


export default function TypeAndSuit(props) {

  return (
    <>
    <div style=
      {
        {
          fontSize: props.cardType == 'Joker' ? '30px' : '',
          color: props.cardSuit == 'hearts' || props.cardSuit == 'diamonds' ? 'red' : 'black'
        }
        
      }
    >
      <div>
        {
            props.cardType == 'Joker' ? '' : props.cardType
        }
      </div>
      <div>
        {

            props.cardType == 'Joker' ? <FontAwesomeIcon icon={faFaceGrinTongueWink} /> :
            props.cardSuit == '' ? '' :
            props.cardSuit == 'clubs' ? <FontAwesomeIcon icon={faSnowflake}/> : 
            props.cardSuit == 'diamonds' ? <FontAwesomeIcon icon={faDiamond}/> : 
            props.cardSuit == 'hearts' ? <FontAwesomeIcon icon={faHeart}/> : 
            <FontAwesomeIcon icon={faCannabis}/>  
        }
        </div>
    </div>
    </>
  )
}