import React from "react"
import { Button } from "./Button"
import { AiOutlineClose } from "react-icons/ai"

const Message = (props) => {
  return (
    <div
      className={`fixed left-1/2 top-[50px] w-[70%] -translate-x-1/2 rounded-lg border-2 p-5 xl:w-[30%] ${props.msgStatus} z-50 flex items-center justify-between`}
    >
      {props.children}
    </div>
  )
}

export default Message
