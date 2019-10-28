<script>
  import data from "../../attendees/attendees.json";
  import { getRandomArbitrary as getRand } from "../stores/attendees";

  let attendees = [];
  $: attendees = data.attendees;

  let colors = ["orange", "blue", "green", "red"];

  $: console.log("data: ", attendees, data, colors[getRand(0, 4)]);
</script>

<div class="flex flex-wrap">
  {#each attendees as attendee}
    <div
      class={`rounded-lg shadow bg-white mr-2 mb-2 border-t-4 border-${colors[getRand(0, 4)]}-300`}>
      <div class="py-2 px-4">
        <h3 class="mb-1 text-xl">{attendee.lastName}, {attendee.firstName}</h3>
        <div class="text-sm">{attendee.major}</div>
      </div>

    </div>
  {:else}
    <span>No one here yet!</span>
  {/each}
</div>
