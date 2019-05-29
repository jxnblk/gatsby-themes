/** @jsx jsx */
import {
  jsx,
  Header,
  Container,
  Flex,
} from 'theme-ui'
import { Link } from 'gatsby'
import NavLink from '../nav-link'

export default props =>
  <Header>
    <Container>
      <Flex mx={-3}>
        {!!props.children ? props.children : (
          <NavLink as={Link} to='/'>
            Gatsby Theme System
          </NavLink>
        )}
      </Flex>
    </Container>
  </Header>
