import styled from 'styled-components'

export const Wrapper = styled.div`
  width: calc(100vw - 9rem);
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center
`
export const BoardStyle = styled.div`
  width: 260px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap
`
export const SqureStyle = styled.div`
  width: 80px;
  height: 80px;
  border: 3px solid #7E7A8F;
  color: #5acdef;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SubmitWrapper = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  justify-content: space-between;
`
export const SubmitBtn = styled.input`
  font-size: .75rem;
  line-height: 1;
  font-family: sans-serif;
  font-weight: 600;
  text-align: center;
  color: #000000;
  padding: 0.5em 1em;
  margin-top: 20px;
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