<script>
  import { onMount } from "svelte";

  import { randomFillSync } from "crypto";
  import PASSWDS from "../../../secrets/passwords.csv";
  import { Pwbox as PWBOX } from "../../../pkg/plutoniumm";

  const perChunk = 5;

  const chunked = PASSWDS.map((e) => {
    return {
      name: e.name,
      url: new URL(e.url).hostname,
      username: e.username,
      password: e.password,
    };
  }).reduce((all, one, i) => {
    const ch = Math.floor(i / perChunk);
    all[ch] = [].concat(all[ch] || [], one);
    return all;
  }, []);

  onMount(() => {
    const box = new PWBOX({ fillBytes: randomFillSync });
    const password = "correct horse battery staple";
    const data =
      "I'm a little teapot, short and stout. Here is my handle, here is my spout. When I get all steamed up, hear me shout. Tip me over and pour me out!";

    const encrypted = box.encrypt(password, data);
    console.log(encrypted);

    const decrypted = box.decrypt(password, encrypted);
    console.log(decrypted);
  });
</script>

<!-- Path: src/routes/password/+page.svelte -->
{#each chunked as chunk, index}
  <div>
    {index} <br />
    {JSON.stringify(chunk).replaceAll("www.", "")}
  </div>
{/each}
