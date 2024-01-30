<script lang="ts">
    import { FlatToast, ToastContainer } from "svelte-toasts";
  import "../app.css"
</script>

<slot />

<ToastContainer placement="bottom-right" let:data={data}>
  <FlatToast {data} />
</ToastContainer>