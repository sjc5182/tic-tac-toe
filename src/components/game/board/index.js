import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Wrapper, Header2, Header3, BoardStyle, SqureStyle, SubmitWrapper, SubmitBtn } from '../../../styled-components/game/board/style'

const Board = (props) => {
  const { players, squares, winner, move, handleUserClick, handleBoardRefresh, handleBoardReset } = props
  //detect if user refresh the page
  if(players.length === 0){
    return <Redirect to='/' />
  }
  const square = squares.map((square, index) => 
    <SqureStyle key = {index} 
      move = {move}
      onClick = {() => handleUserClick(index)}>
      {square}
    </SqureStyle>
  )
  return(
    <Wrapper>
      <Header2>{`${players[0]} vs ${players[1]}`}</Header2>
      {
        winner 
          ?
            <Header3>
              {`Winner `}
              <i className="fas fa-trophy" style = {{color: '#f9db6b'}} />
              {` ${winner}`}
            </Header3>
          :
            null
      }
      <BoardStyle>
        {square}
      </BoardStyle>
      <SubmitWrapper>
        <Link to = '/' onClick = {() => handleBoardReset()}>
          <SubmitBtn
            type = 'submit'
            value = "New Game"
          />
        </Link>
        <SubmitBtn
          type = 'submit'
          value = "Refresh"
          onClick = {() => handleBoardRefresh()}
        />
      </SubmitWrapper>
    </Wrapper>
  )
}

export default Board