
function Header(props) {
  return (
    <div className='header-container'>
      <h3>memory game</h3>
      <h3>cards 
        <select value={props.cardCount} onChange={props.handleCardCount}>
          <option value='12'>12</option>
          <option value='16'>16</option>
          <option value='20'>20</option>
          <option value='24'>24</option>
          <option value='28'>28</option>
          <option value='32'>32</option>
        </select>
      </h3>
      <div className='score-container'>
        <h3 className='score'>
          score:
          <span> {props.score}</span>
        </h3>
        <h3 className='highScore'>
          high score:
          <span> {props.highScore}</span>
        </h3>
      </div>
    </div>
  )
}

export default Header
