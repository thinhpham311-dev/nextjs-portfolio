import { socialLinks } from "@/constants/data"
import { Wrapper, List, Item, SocialLink } from "./styles"

const Socials = () => {
  return (
    <Wrapper className="social-list">
      <List>
        {socialLinks.map(({ href, icon, label }) => (
          <Item key={label}>
            <SocialLink href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
              {icon}
            </SocialLink>
          </Item>
        ))}
      </List>
    </Wrapper>
  )
}

export default Socials
