import coreWebVitals from 'eslint-config-next/core-web-vitals'

export default [
  ...coreWebVitals,
  {
    rules: {
      'import/no-anonymous-default-export': 'off',
    },
  },
]
