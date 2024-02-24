import React from 'react';

import './NewGame.css'

function NewGame() {
  
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div className='pop-up'>
        <div className="new-game">
            <h2>Cheers!</h2>
            <p>Drink to the bottom!</p>
        </div>
      <button onClick={refreshPage}>Play again</button>
    </div>
  );
}

export default NewGame;