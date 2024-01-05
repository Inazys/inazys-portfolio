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
          Laptop <Badge>Specs</Badge>
        </Title>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>CPU</Meta>
            <Link>
            Intel® Core™ i9-13980HX Processor 2.2 GHz (36M  Cache, up to 5.6 GHz, 24 cores: 8 P-cores and 16 E-cores)
          </Link>
          </ListItem>
        <br></br>
          <ListItem>
            <Meta>RAM</Meta>
            <Link>
            32GB (16GB*2) DDR5-4800Mhz
          </Link>
          </ListItem>
        <br></br>
          <ListItem>
            <Meta>GPU</Meta>
            <Link>
            NVIDIA® GeForce RTX™ 4080 12GB GDDR6
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
            <Meta>Screen</Meta>
            <Link>
            16 inch WQXGA (2560 x 1600) 16:10, 240Hz, 3ms, IPS-level, DCI-P3 100%, anti-glare display, G-Sync, ROG Nebula Display
          </Link>
          </ListItem>
        <br></br>
        <ListItem>
            <Meta>Port</Meta>
            <Link>
            <UnorderedList>
              <ListItem>1x 2.5G LAN port</ListItem>
              <ListItem>1x Thunderbolt™ 4 support DisplayPort™</ListItem>
              <ListItem>1x USB 3.2 Gen 2 Type-C support DisplayPort™ / power delivery / G-SYNC</ListItem>
              <ListItem>2x USB 3.2 Gen 1 Type-A</ListItem>
              <ListItem>1x 3.5mm Combo Audio Jack</ListItem>
              <ListItem>1x HDMI 2.1 FRL</ListItem>
            </UnorderedList>
          </Link>
          </ListItem>
        <br></br>
        <ListItem>
            <Meta>Battery</Meta>
            <Link>
            4 Cell 90WHrs
          </Link>
        </ListItem>
        </List>

    <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/uses/laptop.jpg" alt="laptop" />
        <WorkImage src="/images/uses/laptop2.jpg" alt="laptop2" />
      </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Uses
  export { getServerSideProps } from '../../components/chakra'
  