import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center
`

export const BoardStyle = styled.div`
  width: 246px;
  height: 246px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap
`

export const SqureStyle = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SubmitBtn = styled.input`
  font-size: .75rem;
  line-height: 1;
  font-family: sans-serif;
  font-weight: 600;
  text-align: center;
  color: #000000;
  padding: 0.5em 1em;
  line-height: 1;
  cursor: pointer;
  border: 0.3rem solid #FFFFFF;
  &:focus {
    outline: none;
  }
`
export const Header2 = styled.h2`
  font-size: 1.4em;
  margin: .2em
`
export const Header3 = styled.h3`
  font-size: .8em;
  margin: .2em
`