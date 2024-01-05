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
          PC <Badge>Setup</Badge>
        </Title>
        <P>
        This is my computer components!
        </P>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Mainboard</Meta>
            <Link>
            ASUS ROG STRIX Z790 GAMING WIFI DDR5
          </Link>
          </ListItem>
        <br></br>
        <ListItem>
            <Meta>CPU</Meta>
            <Link>
            Intel Core i9 13900KS / 3.2GHz Turbo 6.0GHz / 24 Core 32 Thread / 36MB / LGA 1700
          </Link>
          </ListItem>
        <br></br>
          <ListItem>
            <Meta>RAM</Meta>
            <Link>
            Corsair Dominator Platinum 64GB (2x32GB) RGB 6000 DDR5
          </Link>
          </ListItem>
        <br></br>
          <ListItem>
            <Meta>GPU</Meta>
            <Link>
            ASUS ROG Strix GeForce RTX 4070 Ti OC Edition 12GB
          </Link>
          </ListItem>
        <br></br>
          <ListItem>
            <Meta>SSD</Meta>
            <Link>
            Kingston KC3000 2TB M.2 PCIe gen 4 NVMe
          </Link>
          </ListItem>
        <br></br>
          <ListItem>
            <Meta>PSU</Meta>
            <Link>
            Corsair HX1200 - 80 Plus Platinum - Full Modular
          </Link>
          </ListItem>
        <br></br>
          <ListItem>
            <Meta>Case</Meta>
            <Link>
            ASUS ROG Strix Helios GX601
          </Link>
          </ListItem>
        <br></br>
        <ListItem>
            <Meta>Cooling</Meta>
            <Link>
            ASUS ROG RYUJIN II 360
          </Link>
        </ListItem>
        </List>

    <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/uses/cpu.webp" alt="cpu" />
        <WorkImage src="/images/uses/case.webp" alt="case" />
      </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Uses
  export { getServerSideProps } from '../../components/chakra'
  