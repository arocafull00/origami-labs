import * as React from 'react'

export default {
  title: 'Proyectos destacados',
  items: [
    {
      name: 'Toll Story',
      description: 'Landing premium',
      avatar: '/static/images/webs/toll-story.png',
      children: (
        <>
          Landing premium y experiencia visual para alquiler de espacios y
          eventos.
        </>
      ),
    },
    {
      name: 'Clínica 21 Días Psicoeducación',
      description: 'Web corporativa',
      avatar: '/static/images/webs/21-dias.png',
      children: (
        <>Web corporativa para clínica especializada.</>
      ),
    },
    {
      name: 'Invoicer',
      description: 'Plataforma y panel admin',
      avatar: '/static/images/webs/invoicer.png',
      children: (
        <>
          Plataforma de facturación y panel administrativo.
        </>
      ),
    },
    {
      name: 'Rocafull Group',
      description: 'Web corporativa',
      avatar: '/static/images/webs/rocafull-group.png',
      children: (
        <>
          Web corporativa de servicios técnicos y calefacción.
        </>
      ),
    },
  ],
}
