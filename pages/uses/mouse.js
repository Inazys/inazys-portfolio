import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/use'
  import P from '../../components/paragraph'
  
  const Uses = () => (
    <Layout title="Computer Components">
      <Container>
        <Title>
          Mouse <Badge>Peripheral</Badge>
        </Title>
        <P>
        PRO Wireless was designed to be the ultimate gaming mouse for esports professionals. Over a 2 year period, Logitech G collaborated with more than 50 professional players to find the perfect shape, weight and feel combined with our LIGHTSPEED wireless and HERO 25k sensor technologies. The result is a gaming mouse with unrivaled performance and precision, giving you the tools and confidence needed to win.
        </P>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Dimensions</Meta>
            <span>125 x 63 x 40 ( mm )</span>
          </ListItem>
        <br></br>
          <ListItem>
            <Meta>Weight</Meta>
            <span>80 g</span>
          </ListItem>
        <br></br>
          <ListItem>
            <Meta>Sensor</Meta>
            <span>HERO™ 25K</span>
          </ListItem>
        <br></br>
          <ListItem>
            <Meta>Resolution</Meta>
            <span>100 – 25,600 dpi</span>
          </ListItem>
        <br></br>
          <ListItem>
            <Meta>Wireless technology</Meta>
            <span>LIGHTSPEED Wireless</span>
          </ListItem>
        </List>

        <WorkImage src="/images/uses/mousespec.png" alt="mouse" />
      </Container>
    </Layout>
  )
  
  export default Uses
  export { getServerSideProps } from '../../components/chakra'
  