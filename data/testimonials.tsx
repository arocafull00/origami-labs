import * as React from 'react'

export default {
  title: 'Proyectos destacados',
  items: [
    {
      name: 'Toll Story',
      description: 'Landing de impacto',
      avatar: '/static/images/webs/logos/favicon.webp',
      children: (
        <>
          Landing con identidad visual clara y experiencia cuidada para
          alquiler de espacios y eventos.
        </>
      ),
    },
    {
      name: 'Clínica 21 Días Psicoeducación',
      description: 'Web corporativa',
      avatar: '/static/images/webs/logos/logo%20copy.png',
      children: (
        <>Web corporativa para clínica especializada.</>
      ),
    },
    {
      name: 'Invoicer',
      description: 'Plataforma y panel admin',
      avatar: '/static/images/webs/logos/logo.jpg',
      children: (
        <>
          Plataforma de facturación y panel administrativo.
        </>
      ),
    },
    {
      name: 'Rocafull Group',
      description: 'Web corporativa',
      avatar: '/static/images/webs/logos/logo.png',
      children: (
        <>
          Web corporativa de servicios técnicos y calefacción.
        </>
      ),
    },
  ],
}
