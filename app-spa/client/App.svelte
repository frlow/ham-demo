<script lang="ts">
  import {onMount} from "svelte"
  import type {AppProps} from "./main";

  export let {dispatch, route} = {} as typeof AppProps
  let list: string[] = []
  onMount(async ()=>{
    list = await fetch("/spa/list").then(r=>r.json())
  })
</script>

<div class="root">
    <h1>Svelte</h1>
    <div>{route}</div>
    <div>{JSON.stringify(list)}</div>
    <button on:click={()=>dispatch("routechange", "/demo")}>Route</button>
</div>

<style lang="scss">

</style>
