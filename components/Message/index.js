import React from "react"
import { Wrapper } from "./styles"

const Message = ({ msgStatus, children }) => {
  return <Wrapper className={msgStatus}>{children}</Wrapper>
}

export default Message
