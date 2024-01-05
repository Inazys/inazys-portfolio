import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Minecraft Website">
    <Container>
      <Title>
        Minecraft Website <Badge>2021 - 2022</Badge>
      </Title>
      <P>
        Just a basic website for my minecraft server that's all
      </P>
      <P>
        This project is closed!
      </P>

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Website</Meta>
          <Link href="https://inazysiscool.tk/">
          https://inazysiscool.tk/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Google</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span></span>
        </ListItem>
        <ListItem>
          <Meta>Languages</Meta>
          <span>JavaScript, HTML, CSS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/mcwebsite.png" alt="web" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
