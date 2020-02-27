import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Wrapper, Header2, Header3, BoardStyle, SqureStyle, SubmitBtn } from '../../../styled-components/game/board/style'

const Board = (props) => {
  const { players, squares, winner, handleUserClick, handleBoardReset } = props
  // detect if user refresh the page
  // if(players.length === 0){
  //   return <Redirect to='/' />
  // }
  const square = squares.map((square, index) => 
    <SqureStyle key = {index} 
      onClick = {() => handleUserClick(index)}>
      {square}
    </SqureStyle>
  )
  return(
    <Wrapper>
      <div>hello </div>
      <Header2>{`${players[0]} vs ${players[1]}`}</Header2>
      {
        winner 
          ?
            <Header3>{`${winner} is the Winner`}</Header3>
          :
            null
      }
      <BoardStyle>
        {square}
      </BoardStyle>
      <Link to = '/' onClick = {() => handleBoardReset()}>
        <SubmitBtn
          type = 'submit'
          value = "New Game"
        />
      </Link>
    </Wrapper>
  )
}

export default Board