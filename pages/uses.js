import { Container, Heading, SimpleGrid, Divider, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/use-grid-item'
import thumbPC from '../public/images/uses/pc.png'
import thumbMouse from '../public/images/uses/mouse2.jpg'
import thumbKeyboard from '../public/images/uses/keyboard.jpg'
import thumbHeadset from '../public/images/uses/headset.png'
import thumbPad from '../public/images/uses/mousepad.jpg'
import thumbMonitor from '../public/images/uses/lenovo.jpg'
import thumbLaptop from '../public/images/uses/main_lap.jpg'

const Works = () => (

  <Layout title="Uses">

    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Uses
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="laptop" title="ASUS ROG Strix G18" thumbnail={thumbLaptop}>
            Laptop
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="pc" title="Desktop" thumbnail={thumbPC}>
            PC
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id=""
            title="Pulsar Xlite Wireless V2 Retro Gray"
            thumbnail={thumbMouse}
          >
            Mouse
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="" thumbnail={thumbKeyboard} title="Logitech G Pro X">
            Keyboard
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="" thumbnail={thumbHeadset} title="Logitech G733 Lightspeed Wireless">
            Headset
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="" thumbnail={thumbPad} title="Glorious XL Cloth">
            Mouse Pad
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="" thumbnail={thumbMonitor} title="Lenovo Legion 280Hz">
          Monitor
          </WorkGridItem>
        </Section>

      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          ...
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
