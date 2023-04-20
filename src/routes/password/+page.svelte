<script>
  import { onMount } from "svelte";
  import { hash } from "predefined";
  import { chunked, getQRGen } from "./utils";
  import { encrypt, decrypt } from "./encc";
  import { PASSWORD, images } from "../../../secrets/password.js";

  const prefix = "https://nukes.in/password?encc=";

  const decr_uri = (data) => prefix + encodeURIComponent(data);
  const generateQR = (encrypted, query) => {
    const data = decr_uri(encrypted);
    const el = document.getElementById(query);
    getQRGen(data)
      .getRawData("png")
      .then((png) => {
        const image = new Image();

        image.src = URL.createObjectURL(new Blob([png], { type: "image/png" }));
        image.onload = () => el.appendChild(image);
      });
    return encrypted;
  };

  onMount(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const encrypted = decodeURIComponent(urlParams.get("encc"));

    if (encrypted?.length > 5) {
      console.log(encrypted);
      const passkey = await hash(prompt("Enter passkey"));

      const decrypted = await decrypt(encrypted, passkey);
      console.log(decrypted);
    }
  });
</script>

<!-- Path: src/routes/password/+page.svelte -->
<div class="w-100 f fw" style="word-wrap: break-word;">
  {#each chunked as chunk, index}
    {@const id = `canvas-${index}`}
    {@const reduced = chunk.map(({ name, username, password }) => [
      name,
      username,
      password,
    ])}
    {@const rand = (Math.random() * 20) | 0}
    {@const string = JSON.stringify(reduced).replaceAll("www.", "")}

    <div class="f-col tc p10">
      <div {id} />
      {#await encrypt(string, PASSWORD) then encrypted}
        <a class="p5 rx10 mx-a fw7 button" href={decr_uri(encrypted)}>
          Decrypt {generateQR(encrypted, id).length + rand}
        </a>
        <div>
          {#each reduced as name}
            {#if Object.hasOwn(images, name[0])}
              <img class="p5 rx10" src={images[name[0]]} alt="name[0]" />
            {:else}
              <a href={name[0]}>{name[0]} </a>
            {/if}
          {/each}
        </div>
      {/await}
    </div>
  {/each}
</div>

<style>
  a,
  a:visited,
  a:hover {
    color: purple !important;
  }
  img {
    object-fit: contain;
    height: 48px;
    width: 48px;
  }
  .button {
    background: #fff;
    border: 1px solid #0002;
    max-width: 200px;
    margin-bottom: 10px;
  }
</style>
