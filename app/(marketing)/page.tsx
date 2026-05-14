'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Icon,
  IconButton,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br } from '@saas-ui/react'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCopy,
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

      <TestimonialsSection />

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
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Partner digital para
                <Br /> marcas que buscan diferenciarse
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Origami Labs es un estudio para marcas que buscan diferenciarse,
                empresas con enfoque moderno y negocios especializados. Creamos{' '}
                <Em>
                  experiencias web rápidas, claras y orientadas a conversión
                </Em>
                <Br />
                para equipos orientados a la excelencia que quieren más clientes
                y una presencia online impecable.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} alignItems="center" pt="4">
                <ButtonLink
                  colorScheme="primary"
                  size="lg"
                  href="mailto:adrianrocafull1@gmail.com?subject=Consulta%20Origami%20Labs"
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
  const { onCopy, hasCopied } = useClipboard('adrianrocafull1@gmail.com')

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

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                Email
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                adrianrocafull1@gmail.com
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copiar email"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
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
        avatar="/static/favicons/apple-touch-icon.png"
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
