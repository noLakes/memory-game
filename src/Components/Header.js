
function Header(props) {
  return (
    <div className='header-container'>
      <h1>Memory Game!</h1>
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
