import { useRouter } from "next/router"
import { fadeIn } from "@/variants"
import { NAVBAR_DATA } from "@/constants"

import { NavContainer, MotionWrapper, NavList, NavItem, NavLink } from "./styles"

const Navbar = () => {
  const router = useRouter()

  return (
    <NavContainer>
      <MotionWrapper variants={fadeIn("up", 1)} initial="hidden" animate="show" exit="hidden">
        <NavList>
          {NAVBAR_DATA.map((item) => {
            const isActive =
              item.path === "/" ? router.asPath === "/" : router.asPath.startsWith(item.path)

            return (
              <NavItem key={item.name}>
                <NavLink href={item.path} $active={isActive}>
                  {item.icon}
                </NavLink>
              </NavItem>
            )
          })}
        </NavList>
      </MotionWrapper>
    </NavContainer>
  )
}

export default Navbar
