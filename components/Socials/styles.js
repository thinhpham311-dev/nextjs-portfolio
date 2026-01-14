import styled from "styled-components"
import Link from "next/link"

const Wrapper = styled.div`
  z-index: 10;

  @media (min-width: 1280px) {
    margin-left: 0;
    margin-right: 0;
  }
`

const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 12px;

  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
`

const Item = styled.li``

const SocialLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0.5px solid #ffffff;
  font-size: 18px;
  font-weight: 300;
  color: #ffffff;
  transition: all 0.5s ease;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`

export { Wrapper, List, Item, SocialLink }
