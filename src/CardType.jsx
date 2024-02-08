export default function CardType(props) {


  return (
    <>
    <div style=
      {
        {
          fontSize: props.cardType == 'Joker' ? '40px' : '',
          color: props.cardSuit == 'hearts' || props.cardSuit == 'diamonds' ? 'red' : 'black',
          fontWeight: 'bold'
        }
        
      }
    >
            {
                props.cardType == 'Joker' ? '' : props.cardType
            }
        </div>
    </>
  )
}