import { blocks } from './blocks'

export const Layout = ({ children }: { children?: any }) => {
  return (
    <html>
      <head>
        <title>Welcome!</title>
        {blocks.head}
      </head>
      <body hx-boost="true">
        {blocks.top}
        {children || ''}
      </body>
    </html>
  )
}
