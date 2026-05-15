'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Icon,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import { Br } from '@saas-ui/react'
import {
  FiArrowRight,
  FiBox,
  FiCode,
  FiGrid,
  FiLayers,
  FiMail,
  FiMessageCircle,
  FiPhone,
  FiSearch,
  FiSliders,
  FiTarget,
  FiTrendingUp,
  FiUserPlus,
  FiUsers,
  FiZap,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import { HighlightTag } from '#components/highlight-tag/highlight-tag'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { ProjectCarousel } from '#components/project-stack/project-carousel'
import { ProjectStack } from '#components/project-stack/project-stack'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

const SERVICE_TAGS = [
  'Landing pages de alta conversión',
  'Reservas y citas online',
  'Dashboards y paneles',
  'SEO local',
  'Mantenimiento técnico',
  'Digitalización interna',
] as const

const Home = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <PricingSection />

      <ContactSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Box
        display={{ base: 'block', lg: 'none' }}
        position="absolute"
        top="-40px"
        right="-80px"
        w="280px"
        h="280px"
        borderRadius="full"
        bg="primary.500"
        opacity={0.22}
        filter="blur(70px)"
        pointerEvents="none"
        zIndex={0}
        aria-hidden
      />
      <Box
        display={{ base: 'block', lg: 'none' }}
        position="absolute"
        top="45%"
        left="-60px"
        w="200px"
        h="200px"
        borderRadius="full"
        bg="cyan.500"
        opacity={0.18}
        filter="blur(55px)"
        pointerEvents="none"
        zIndex={0}
        aria-hidden
      />
      <Container
        maxW="container.xl"
        pt={{ base: 24, lg: 60 }}
        pb={{ base: 16, lg: 40 }}
        position="relative"
        zIndex={1}
      >
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          alignItems="center"
          spacing={{ base: 6, lg: 8 }}
        >
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            py={{ base: 4, lg: 20 }}
            title={
              <FallInPlace>
                <Text
                  as="span"
                  display={{ base: 'inline-flex', lg: 'none' }}
                  alignItems="center"
                  gap="2"
                  mb="7"
                  px="4"
                  py="2"
                  rounded="full"
                  borderWidth="1px"
                  borderColor="primary.100"
                  bg="whiteAlpha.700"
                  color="purple.700"
                  fontSize="sm"
                  fontWeight="medium"
                  letterSpacing="0.01em"
                  _dark={{
                    borderColor: 'purple.300',
                    bg: 'blackAlpha.300',
                    color: 'purple.100',
                  }}
                >
                  <Box
                    as="span"
                    w="2"
                    h="2"
                    rounded="full"
                    bg="primary.500"
                    boxShadow="0 0 0 5px rgba(124,58,237,0.12)"
                  />
                  Estudio digital para marcas modernas
                </Text>
                <Text
                  as="span"
                  display="block"
                  fontSize={{ base: '40px', md: '6xl', lg: '6xl' }}
                  lineHeight={{ base: '1.02', md: '0.95' }}
                  letterSpacing={{ base: '-0.03em', md: '-0.04em' }}
                  fontWeight="black"
                >
                  Partner digital
                  <Br />
                  para marcas que
                </Text>
                <Text
                  as="span"
                  display="block"
                  mt={{ base: 2, md: 3 }}
                  fontSize={{ base: '50px', md: '6xl', lg: '6xl' }}
                  lineHeight={{ base: '0.98', md: '0.95' }}
                  letterSpacing={{ base: '-0.03em', md: '-0.04em' }}
                  fontWeight="black"
                  bgGradient="linear(to-r, #5928ff, #8d5dff)"
                  bgClip="text"
                >
                  buscan diferenciarse
                </Text>
              </FallInPlace>
            }
            description={
              <FallInPlace
                delay={0.4}
                fontWeight="medium"
                fontSize={{ base: '2xl', md: 'xl' }}
                lineHeight={{ base: 1.45, md: 1.5 }}
                maxW={{ base: '100%', md: '2xl' }}
              >
                <Em>
                  experiencias web rápidas, claras y orientadas a conversión
                </Em>
                <Br />
                para empresas que quieren más clientes y una presencia online
                impecable.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} alignItems="center" pt={{ base: 3, md: 4 }}>
                <ButtonLink
                  colorScheme="primary"
                  size={{ base: 'md', md: 'lg' }}
                  href="mailto:adrianrocafull1@gmail.com?subject=Consulta%20Origami%20Labs"
                  rounded={{ base: 'xl', md: 'full' }}
                  px={{ base: 8, md: 7 }}
                  minH={{ base: '58px', md: '52px' }}
                  boxShadow="0 14px 35px rgba(89,40,255,0.35)"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Solicitar contacto
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            display={{ base: 'block', lg: 'none' }}
            w="100%"
            maxW="container.sm"
            mx={{ base: 'auto', lg: 0 }}
            mt={6}
          >
            <FallInPlace delay={1}>
              <ProjectCarousel />
            </FallInPlace>
          </Box>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box position="relative" height="100%">
                <ProjectStack />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="beneficios"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="1"
        features={[
          {
            title: 'Entregas rápidas',
            icon: FiZap,
            description:
              'Velocidad de ejecución sin renunciar a un acabado impecable y cercano.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Diseño que diferencia',
            icon: FiLayers,
            description:
              'Estética minimalista y moderna que refuerza confianza y marca.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Atención personalizada',
            icon: FiUsers,
            description:
              'Trato cercano y accesible, pensado para negocios locales y equipos reducidos.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Enfoque al negocio',
            icon: FiTarget,
            description:
              'Soluciones ligadas a captación, reservas y procesos reales, no solo mockups.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Filosofía y propuesta">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Combinamos <Em>imagen cuidada, velocidad y trato cercano</Em>. No se
            trata solo de publicar una web: construimos herramientas útiles para
            automatizar, gestionar reservas y proyectar una marca sólida y
            actual.
          </Text>

          <ButtonLink
            href="/#contacto"
            colorScheme="primary"
            rounded="full"
            size="md"
            rightIcon={
              <Icon
                as={FiArrowRight}
                sx={{
                  transitionProperty: 'common',
                  transitionDuration: 'normal',
                  '.chakra-button:hover &': {
                    transform: 'translate(5px)',
                  },
                }}
              />
            }
          >
            Contáctanos
          </ButtonLink>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Sectores habituales">
        <Text color="muted" fontSize="lg" mb="4">
          Acompañamos a perfiles que viven de la confianza y la agenda llena:
        </Text>
        <UnorderedList
          color="muted"
          fontSize="lg"
          stylePosition="inside"
        >
          <ListItem>Clínicas dentales y centros de estética</ListItem>
          <ListItem>Fisioterapeutas especializados</ListItem>
          <ListItem>Agentes inmobiliarios y asesores financieros</ListItem>
          <ListItem>Coaches de alto nivel</ListItem>
          <ListItem>Bodas y eventos con exigencia de marca</ListItem>
        </UnorderedList>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Origami Labs"
        description="Visión"
        avatar="/static/images/favicon.png"
        gradient={['pink.200', 'purple.500']}
      >
        Buscamos evolucionar hacia una plataforma modular reutilizable para
        negocios locales, creando soluciones digitales rápidas, escalables y
        mantenibles.
      </HighlightsTestimonialItem>
      <HighlightsItem colSpan={[1, null, 2]} title="Servicios que integramos">
        <Text color="muted" fontSize="lg">
          Cada entrega puede combinar varios de estos pilares según tu etapa y
          presupuesto.
        </Text>
        <Wrap mt="8">
          {SERVICE_TAGS.map((label) => (
            <HighlightTag key={label} label={label} />
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Servicios pensados para
          <Br /> resultados medibles
        </Heading>
      }
      description={
        <>
          Desde la primera landing hasta el panel interno: tecnología aplicada a
          captar clientes y ordenar tu operación.
          <Br />
          Comunicación clara, elegante y profesional en cada entrega.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Landings de conversión',
          icon: FiTrendingUp,
          description:
            'Páginas enfocadas a generar leads y solicitudes de contacto con mensajes directos.',
          variant: 'inline',
        },
        {
          title: 'Reservas y citas online',
          icon: FiUserPlus,
          description:
            'Flujos para que tus clientes reserven sin fricción y tu equipo mantenga el control.',
          variant: 'inline',
        },
        {
          title: 'Dashboards internos',
          icon: FiSliders,
          description:
            'Paneles de gestión para visualizar métricas, tareas y procesos clave.',
          variant: 'inline',
        },
        {
          title: 'SEO local',
          icon: FiSearch,
          description:
            'Visibilidad en búsquedas cercanas al negocio para captar demanda de zona.',
          variant: 'inline',
        },
        {
          title: 'Mantenimiento continuo',
          icon: FiCode,
          description:
            'Evolución técnica recurrente para que tu site siga rápido, estable y al día.',
          variant: 'inline',
        },
        {
          title: 'Digitalización de procesos',
          icon: FiGrid,
          description:
            'Adaptamos flujos internos a herramientas web que ahorran tiempo y errores.',
          variant: 'inline',
        },
        {
          title: 'Webs corporativas y producto',
          icon: FiBox,
          description:
            'Experiencia construyendo webs corporativas y plataformas funcionales de negocio.',
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      id="proyectos"
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, j) => (
              <Testimonial key={`${t.name}-${j}`} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        El IVA u otros impuestos pueden aplicarse según tu ubicación fiscal.
      </Text>
    </Pricing>
  )
}

const ContactSection = () => {
  return (
    <Box as="section" id="contacto" py={{ base: 16, md: 20 }}>
      <Container maxW="container.xl">
        <Stack spacing="10">
          <Stack spacing="4" maxW="3xl">
            <Heading size="2xl">Contacto directo</Heading>
            <Text color="muted" fontSize={{ base: 'lg', md: 'xl' }}>
              Elige el canal que prefieras y te respondo lo antes posible.
            </Text>
          </Stack>

          <Stack direction={{ base: 'column', md: 'row' }} spacing="6">
            <Box
              flex="1"
              rounded="2xl"
              borderWidth="1px"
              p={{ base: 6, md: 8 }}
              bg="white"
              _dark={{ bg: 'gray.900' }}
            >
              <Stack spacing="4" alignItems="flex-start">
                <Flex alignItems="center" gap="3">
                  <Icon as={FiMail} boxSize="5" color="primary.500" />
                  <Text fontWeight="semibold">Correo</Text>
                </Flex>
                <Text color="muted">adrianrocafull1@gmail.com</Text>
                <ButtonLink
                  href="mailto:adrianrocafull1@gmail.com?subject=Consulta%20Origami%20Labs"
                  colorScheme="primary"
                  variant="solid"
                >
                  Enviar correo
                </ButtonLink>
              </Stack>
            </Box>

            <Box
              flex="1"
              rounded="2xl"
              borderWidth="1px"
              p={{ base: 6, md: 8 }}
              bg="white"
              _dark={{ bg: 'gray.900' }}
            >
              <Stack spacing="4" alignItems="flex-start">
                <Flex alignItems="center" gap="3">
                  <Icon as={FiPhone} boxSize="5" color="primary.500" />
                  <Text fontWeight="semibold">Teléfono</Text>
                </Flex>
                <Text color="muted">+34 722 56 18 09</Text>
                <ButtonLink
                  href="tel:+34722561809"
                  colorScheme="primary"
                  variant="outline"
                >
                  Llamar ahora
                </ButtonLink>
              </Stack>
            </Box>

            <Box
              flex="1"
              rounded="2xl"
              borderWidth="1px"
              p={{ base: 6, md: 8 }}
              bg="white"
              _dark={{ bg: 'gray.900' }}
            >
              <Stack spacing="4" alignItems="flex-start">
                <Flex alignItems="center" gap="3">
                  <Icon as={FiMessageCircle} boxSize="5" color="green.500" />
                  <Text fontWeight="semibold">WhatsApp</Text>
                </Flex>
                <Text color="muted">+34 722 56 18 09</Text>
                <ButtonLink
                  href="https://wa.me/34722561809?text=Hola%20Origami%20Labs%2C%20quiero%20informaci%C3%B3n"
                  colorScheme="green"
                  variant="solid"
                >
                  Abrir WhatsApp
                </ButtonLink>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
