export const About = () => {
  return (
    <>
      <h1>About us!</h1>
      <div>Some text about us....</div>
      <a href="mailto:mail@example.com">mail@example.com</a>
      <div x-data="{count: 0}">
      <my-app x-bind:mycount="count" x-on:myevent="count++"></my-app>
      </div>
    </>
  )
}
