import React from "react"
import { StyledButton, Spinner } from "./styles"

const Button = ({ children, isDisabled, isLoading, variant, size, ...props }) => {
  return (
    <StyledButton variant={variant} size={size} disabled={isDisabled} {...props}>
      {isLoading && <Spinner />}
      {children}
    </StyledButton>
  )
}

export default Button
