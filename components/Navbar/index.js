import { useRouter } from "next/router"
import { fadeIn } from "@/variants"
import { NAVBAR_DATA } from "@/constants"

import { Container, Wrapper, NavList, NavItem, NavLink } from "./styles"

const Navbar = () => {
  const router = useRouter()

  return (
    <Wrapper variants={fadeIn("up", 1)} initial="hidden" animate="show" exit="hidden">
      <Container>
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
      </Container>
    </Wrapper>
  )
}

export default Navbar
