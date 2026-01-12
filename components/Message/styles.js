import styled from "styled-components"

const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50px;
  transform: translateX(-50%);
  z-index: 50;

  width: 70%;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1280px) {
    width: 30%;
  }
`
export { Wrapper }
