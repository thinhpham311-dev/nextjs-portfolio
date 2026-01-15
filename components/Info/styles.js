import Link from "next/link"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
`

const InfoInnner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
`

const ContactLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  margin-right: 4px;

  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
  span {
    font-size: 13spx;
    font-weight: 500;
  }
`

export { Wrapper, InfoInnner, ContactLink }
