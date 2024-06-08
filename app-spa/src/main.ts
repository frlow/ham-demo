import { createWrapper } from './wrapper'

export const AppProps = createWrapper({
  component: () => import('./App.svelte'),
  tag: 'app-spa',
  attributes: [] as const,
})
