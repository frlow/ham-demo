import {blocks} from './blocks'

export const Layout = ({children}: { children?: any }) => {
  return (
      <html>
      <head>
        <title>Welcome!</title>
        {blocks.head}
      </head>
      <body hx-boost="true">
      <header x-data="{active: 'home'}">
        {blocks.top}
      </header>
      <main>
        {children || ''}
      </main>
      </body>
      </html>
  )
}
