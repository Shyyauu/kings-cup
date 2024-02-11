import { useState, useEffect } from "react"

import './Challenges.css'

export default function Challenges(props) {

    const [ruleTitle, setRuleTitle] = useState(`Let's get drunk!`)
    const [rule, setRule] = useState('Place a cup in the middle of the table and click START')
    const [isKing, setIsKing] = useState() // hmmmmmmm
    
    function handleRules() {

        const { cardType } = props

        if (cardType === 2) {
            setRuleTitle('You')
            setRule('Whoever draws this can choose anyone to take a drink')
        } else if (cardType === 3) {
            setRuleTitle('Me')
            setRule('The person who draws this takes a drink')
        } else if (cardType === 4) {
            setRuleTitle('Floor')
            setRule('The last person to touch the floor takes a drink')
        } else if (cardType === 5) {
            setRuleTitle('Guys')
            setRule('All the guys at the table drink')
        } else if (cardType === 6) {
            setRuleTitle('Chicks')
            setRule('All the girls at the table drink')
        } else if (cardType === 7) {
            setRuleTitle('Heaven')
            setRule('If you draw this card, raise your hand above you head. Every other player must do so as well. The last person takes a drink')
        } else if (cardType === 8) {
            setRuleTitle('Mate')
            setRule('Choose someone to be your mate. For the rest of the game, they drink when you drink')
        } else if (cardType === 9) {
            setRuleTitle('Rhyme')
            setRule(`You say a word, then the person to your right has to say a word that rhymes. This continues until someone can't think of a word. That person takes a drink. You can't reuse words`)
        } else if (cardType === 10) {
            setRuleTitle('Categories')
            setRule(`The person to your right must name something that falls within the category. This continues until someone can't think of something. That person takes a drink`)
        } else if (cardType === 'J') {
            setRuleTitle('Never Have I Ever')
            setRule('Everyone plays Never Have I Ever')
        } else if (cardType === 'Q') {
            setRuleTitle('Questions')
            setRule('Ask someone a question. That person then asks someone else a question. This continues until someone messes up or fails to ask a question. That person drinks. No question can be repeated')
        } else if (cardType === 'A') {
            setRuleTitle('Waterfall')
            setRule('Each player starts drinking at the same time as the person to their left. NO player can stop drinking until the person before them stops')
        } else if (cardType === 'Joker') {
            setRuleTitle('Finish Your Beverage')
            setRule('Finish the remainder of your current beverage')
        } else if (cardType === 'K') {
            setRuleTitle(`King's Cup`)
            setRule('Set a rule to be followed, e.g. stand on one foot when you drink, only speak in an accent, etc.')
        }

    }

    useEffect(() => {
        handleRules()
      }, [props.isClicked])

  return (
    <>
        <div className="card-middle">
            <h1>{ruleTitle}</h1>
            <p>{rule}</p>
        </div>    
    </>
  )
}
