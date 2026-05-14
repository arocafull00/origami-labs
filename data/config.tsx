import { Logo } from './logo'

type HeaderNavLink = {
  id: string
  label: string
  href?: string
}

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Origami Labs',
    description:
      'Estudio tecnológico para negocios locales premium: experiencias web modernas, reservas online, SEO local y digitalización con diseño minimalista y trato cercano.',
  },
  header: {
    links: [
      {
        id: 'beneficios',
        label: 'Ventajas',
      },
      {
        id: 'features',
        label: 'Servicios',
      },
      {
        id: 'proyectos',
        label: 'Proyectos',
      },
      {
        id: 'pricing',
        label: 'Precios',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
    ] as HeaderNavLink[],
  },
  footer: {
    copyright: <>© {new Date().getFullYear()} Origami Labs</>,
    links: [
      {
        href: 'mailto:adrianrocafull1@gmail.com',
        label: 'Contacto',
      },
    ],
  },
}

export default siteConfig
