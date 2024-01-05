import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Yuii Discord Bot <Badge>2021-2022</Badge>
      </Title>
      <P>
        A very cool music bot made by inazys
      </P>
      <P>
        This project is closed!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/Inazys/yuii-bot">
          https://github.com/Inazys/yuii-bot <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Discord</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS</span>
        </ListItem>
        <ListItem>
          <Meta>Languages</Meta>
          <span>JavaScript</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/yui_github.png"/>
      <WorkImage src="/images/works/discord_bot.png"/>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
