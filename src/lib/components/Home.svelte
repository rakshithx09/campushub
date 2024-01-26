<script lang="ts">
    import { getServers } from "$lib/db/pocketbase";
    import type { BaseUser } from "$lib/types";
    export let user:BaseUser;
    $: servers = getServers(user.id);
</script>

<section>
    Hi User
</section>
<section>
    <h1>Servers</h1>
    <div>
        await
    </div>
</section>