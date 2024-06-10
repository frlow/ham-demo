export const registerRoutes = (app) => {
  app.post("/blocks", async (req, res) => {
    const blocks = await getBlocks()

    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(blocks))
  })

}

export const getBlocks = async () => {

  const head = `<!--common head-->
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/assets/style.css">
<script src="/assets/alpine-3.13.10.min.js" defer></script>
<script src="/assets/htmx-1.9.12.min.js"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet">
<!--common head-->
`

  const top = `<!--common top-->
<nav>
    <ul>
        <li x-bind:class="active==='home' ? 'active' : ''"><a href="/" >Welcome</a></li>
        <li x-bind:class="active==='astro' ? 'active' : ''"><a href="/astro">Astro</a></li>
    </ul>
</nav>
<!--common top-->
`
  return {head, top}
}
