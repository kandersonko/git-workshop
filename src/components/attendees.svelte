<script>
  import data from "../../attendees/attendees.json";
  import { getRandomArbitrary as getRand } from "../stores/attendees";

  let attendees = [];
  $: attendees = data.attendees;

  let colors = ["orange", "blue", "green", "red"];
</script>

<div class="flex flex-wrap justify-center">
  {#each attendees as attendee}
    <div
      class={`flex items-center rounded-lg shadow bg-white mr-3 mb-3 border-t-4 border-${colors[getRand(0, 4)]}-300`}>
      <div
        class={`flex items-center justify-center ml-2 h-10 w-10 rounded-full
        bg-${colors[getRand(0, 4)]}-500`}>
        <h4 class="text-white font-bold text-xl">{attendee.lastName[0]}</h4>
      </div>
      <div class="py-2 px-4">
        <h3 class="mb-1 text-xl">{attendee.lastName}, {attendee.firstName}</h3>
        <div class="text-sm">{attendee.major}</div>
      </div>

    </div>
  {:else}
    <span>No one here yet!</span>
  {/each}
</div>
