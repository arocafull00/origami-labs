import * as React from 'react'

export default {
  title: 'Proyectos destacados',
  items: [
    {
      name: 'Toll Story',
      description: 'Landing de impacto',
      avatar: '/static/images/webs/toll-story.png',
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
