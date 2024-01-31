<script lang="ts">
    import { createStudentViaJson } from "$lib/db/pocketbase";
    import { showToast } from "$lib/utils";

	let files:FileList;

    async function onCreate(){
        if(files && files.length>0){
            const text =  await Array.from(files)[0].text()
            createStudentViaJson(JSON.parse(text))
        }else{
            showToast("error","upload json file","error")
        }
    }
</script>

<form>
  <h1>create students via json</h1>
  <div>
    <p>json must be of type</p>
		

    <pre>
              [
                  {"{"}
                      "branch":"AD",
                      "usn":"nnm22ad001",
                      "name":"Aastha londhe",
                      "section":"A",
                      "sem":4
                  {"}"},
              ]
          </pre>
  </div>
  <label>
    <span>Json file</span>
    <input type="file" accept=".json" bind:files />
  </label>

  <button on:click={onCreate}>Create</button>
</form>