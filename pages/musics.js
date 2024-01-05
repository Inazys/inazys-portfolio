import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { Box } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'

const Posts = () => (
    <Layout title="Musics">

    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Musics
      </Heading>

      <SimpleGrid gap={6}>
      <Section delay={0.5}>
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
                __html: '<iframe style="border-radius:16px" src="https://open.spotify.com/embed/track/6MCjmGYlw6mQVWRFVgBRvB?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
            }}
        />
        </Section>
 

      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
            Musics Playlist
        </Heading>
      </Section>

      <SimpleGrid gap={6}>
        <Section delay={0.5}>
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
                __html: '<iframe style="border-radius:16px" src="https://open.spotify.com/embed/album/79dL7FLiJFOO0EoehUHQBv?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
            }}
        />
        </Section>
        
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
