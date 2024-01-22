<script lang="ts">
  import { getMessages, pb } from "$lib/db/pocketbase";
  import {channelSelected } from "$lib/stores";

  $: messages = getMessages($channelSelected!.id)
</script>

<div>
  {#await messages then result}
    {#each result as message (message.id)}
      <div>
        <img
          src={pb.files.getUrl(message.expand?.user, message.expand?.user.avatar, {'thumb': '50x50'})}
          alt={message.expand?.user.username}
          class="w-10 aspect-square"
        />
        <span>{message.content}</span>
      </div>
    {/each}
  {/await}
</div>
