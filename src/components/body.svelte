<script>
  import Attendees from "./attendees.svelte";
</script>

<div
  class="bg-center h-64 w-64"
  style="background-image: url('public/assets/images/DevFest2019BGNew.png')" />

<div
  class="container mx-auto px-2 md:px-4 py-2 flex-1 flex flex-col items-center
  min-h-0">
  <h1 class="text-center text-3xl text-gray-700 mb-6">List of attendees</h1>

  <Attendees />

</div>
