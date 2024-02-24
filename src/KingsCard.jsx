import './KingsCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake, faCannabis, faDiamond, faHeart } from '@fortawesome/free-solid-svg-icons'

function KingsCard(props) {

    const { isKing } = props
    console.log(isKing)
  return (
    <>
        <div className="kings-card-deck">
            <div className="kings-card">    
                {
                    isKing.map((king) => (
                        <div className="king"
                        style=
                        {
                          {
                            color: king == 'hearts' || king == 'diamonds' ? 'red' : 'black'
                          }
                        }
                        key={king}>
                            <div className="king-letter">
                                <span>K</span>
                            </div>
                            { 
                                king && (
                                king === 'clubs' ? <FontAwesomeIcon icon={faSnowflake}/> : 
                                king === 'diamonds' ? <FontAwesomeIcon icon={faDiamond}/> : 
                                king === 'hearts' ? <FontAwesomeIcon icon={faHeart}/> : 
                                <FontAwesomeIcon icon={faCannabis}/>
                            )}

                        </div>

                    ))
                }
            </div>
        </div>    
    </>
  )
}

export default KingsCard