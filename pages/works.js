import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbYuiBot from '../public/images/works/discordjs.png'
import thumbMCWeb from '../public/images/works/mcweb.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="yuii-bot" title="Yuii Discord Bot" thumbnail={thumbYuiBot}>
            A multifunction discord bot
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="hangoutbot"
            title="Hangout Discord Bot"
            thumbnail={thumbYuiBot}
          >
            Just a basic discord bot!
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="mcwebsite" thumbnail={thumbMCWeb} title="Minecraft Website">
            A website for my minecraft server
          </WorkGridItem>
        </Section>

      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          
        </Section>
        <Section delay={0.5}>
          
        </Section>
        <Section delay={0.6}>
          
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
