// ServiceSlider.styles.js
import styled from "styled-components"

export const SlideCard = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  background: rgba(65, 47, 123, 0.15);
  border-radius: 10px;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    background: rgba(89, 65, 169, 0.15);
  }

  @media (min-width: 1280px) {
    display: block;
  }
`

export const IconWrap = styled.div`
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: var(--accent);
  border-radius: 6px;
`

export const Content = styled.div`
  width: calc(100% - 74px);
  margin-bottom: 20px;

  @media (min-width: 1280px) {
    width: 100%;
  }

  h5 {
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 1.1rem;
  }

  p {
    margin-bottom: 10px;
    opacity: 0.9;
  }
`

export const ArrowBox = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;

  ${SlideCard}:hover & {
    transform: rotate(45deg);
    color: var(--accent);
  }
`
