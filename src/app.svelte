<script>
  import Header from "./components/header.svelte";
  import Body from "./components/body.svelte";

  let title = "Git Workshop";
</script>

<main
  class="flex flex-col min-h-0 w-screen h-screen overflow-hidden bg-gray-200">
  <Header {title} />
  <Body />
</main>
