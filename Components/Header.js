
function Header(props) {
  return (
    <div className='header-container'>
      <h1>Memory Game!</h1>
      <h1>Cards:
        <select value={props.cardCount} onChange={props.handleCardCount}>
          <option value='12'>12</option>
          <option value='16'>16</option>
          <option value='20'>20</option>
          <option value='24'>24</option>
          <option value='28'>28</option>
          <option value='32'>32</option>
        </select>
      </h1>
      <h1 className='score'>
        Score:
        <span> {props.score}</span>
      </h1>
      <h1 className='highScore'>
        High Score:
        <span> {props.highScore}</span>
      </h1>
    </div>
  )
}

export default Header
