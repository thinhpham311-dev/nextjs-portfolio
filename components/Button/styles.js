import styled from "styled-components"
import { cva } from "class-variance-authority"
import { VscLoading } from "react-icons/vsc"
import { cn } from "/utils"

// BASE thuần CSS -> không sinh tailwind -> không bị dư
const BaseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
  user-select: none;

  &:active {
    transform: scale(0.98);
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`

// CVA chỉ sinh biến thể
export const buttonVariants = cva("", {
  variants: {
    variant: {
      link: "bg-transparent",
      default: "bg-accent text-white hover:bg-accent/80",
      secondary: "bg-gray-200 text-black hover:bg-gray-300",
      outline: "border border-accent text-accent hover:bg-accent/10",
      ghost: "hover:bg-gray-100 text-gray-700",
      destructive: "bg-red-600 text-white hover:bg-red-700",
    },
    size: {
      sm: "px-2 py-1 text-sm",
      md: "px-3 py-2 text-base",
      lg: "px-4 py-2.5 text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
})

export const StyledButton = styled(BaseButton).attrs(({ variant, size, className }) => ({
  className: cn(buttonVariants({ variant, size }), className),
}))``

export const Spinner = styled(VscLoading)`
  margin-right: 0.75rem;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`
