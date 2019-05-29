/** @jsx jsx */
import {
  jsx,
  Footer,
  Container,
  Flex,
} from 'theme-ui'

export default props =>
  <Footer>
    <Container>
      <Flex mx={-3}>
        Gatsby Theme System
        {props.children}
      </Flex>
    </Container>
  </Footer>
