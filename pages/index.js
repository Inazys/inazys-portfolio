import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/ytb.jpg'
import thumbDiscord from '../public/images/works/discordjs.png'
import Image from 'next/image'
import dynamic from "next/dynamic";
const Clock = dynamic(() => import("../components/clock"), { ssr: false });
const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const now = new Date();
const hour = now.getHours();
const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
var greet
if (hour < 12) {
  greet = `Good morning from ${userTimeZone}!`
} else {
  greet = `Good afternoon from ${userTimeZone}!`
}


const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, {greet}
      </Box>

      <Clock></Clock>
      <br></br>
      <Section delay={0.2}>
      <Box
      w="100%"
      h="100%"
      p="0"
      m="0"
      overflow="hidden"
      css={{
        "& iframe": {
          border: "none",
          width: "100%",
          height: "152",
        },
      }}
      dangerouslySetInnerHTML={{
        __html: '<iframe style="border-radius:16px" src="https://open.spotify.com/embed/track/5Z01UMMf7V1o0MzF86s6WJ?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
      }}
    />
    </Section>
      <br></br>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Inazys
          </Heading>
          <p>Time...</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/cat.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Hi there, my name is Anh Khoa, but I prefer to go by the name "Inazys." I am currently a grade 12 student at Vinschool Central Park, and I'm 18 years old. Coding has always been a passion of mine, and I'm currently working on a project: a {' '}
          <NextLink href="/works/yuii-bot" passHref scroll={false}>
            <Link>Discord Bot</Link>
          </NextLink>
        </Paragraph>
        <br></br>
        <Paragraph>
        In 2023, I plan to enroll in a university in Vietnam to further my studies in coding. I'm eager to learn more about programming and to develop my skills in this field. If you want to support me, please subscribe to my
        &quot;
          <NextLink href="https://www.youtube.com/channel/UCTZUgYsQTkPVjg6pc6MW19Q" passHref>
            <Link target="_blank">Inazys</Link>
          </NextLink>
          &quot;
        YouTube channel. Thank you for your interest in me and my work!
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2005</BioYear>
          Born in Nha Trang, Vietnam.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Studied in the University of VGU

        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My passion
        </Heading>
        <Paragraph>
        I have a variety of hobbies that keep me entertained and engaged. One of my favorite pastimes is playing games. I love the challenge and excitement that games offer. When I'm not gaming, I enjoy listening to music. It helps me relax and gives me inspiration for my other hobbies.
        </Paragraph>
        <br></br>
        <Paragraph>
          {' '}
          <Link href="https://github.com/Inazys" target="_blank">
            Coding
          </Link>
          &nbsp;is another hobby of mine that I'm very passionate about. I love the creativity and problem-solving skills it requires. I'm constantly learning new programming languages and techniques to improve my skills, {' '}
          <Link href="https://www.youtube.com/channel/UCTZUgYsQTkPVjg6pc6MW19Q" target="_blank">
            Video Editing
          </Link>
          &nbsp;is also a hobby I enjoy, as it allows me to express my creativity in a different way.
        </Paragraph>
        <br></br>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My social
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Inazys" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Inazys
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/inazys_official" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @inazys_official
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/inazys_val" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @inazys_val
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/inazys_official/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @inazys_official
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/channel/UCTZUgYsQTkPVjg6pc6MW19Q"
            title="Inazys"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://github.com/Inazys/yuii-bot"
            title="Yuii Discord Bot"
            thumbnail={thumbDiscord}
          >
            A multifunction Discord Bot
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Project
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
  
)

export default Home
export { getServerSideProps } from '../components/chakra'